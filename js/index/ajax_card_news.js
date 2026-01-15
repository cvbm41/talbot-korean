let globalNewscount = 0;
let globalNewstotalItems = 0;
let globalNewsIntervalId = null;

function truncateText(text, maxLength = 20) {
  text = (text || "").toString().trim();
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

/**
 * ✅ ticker 무한 스크롤 시작 (중복 interval 방지)
 */
function startScrolling() {
  const $tickerWrapper = $("#scrolling-headline");
  const tickerItems = $tickerWrapper.children();
  globalNewstotalItems = tickerItems.length;

  const originalCount = globalNewstotalItems / 2;
  if (originalCount === 0) return;

  // ✅ 중복 실행 방지
  if (globalNewsIntervalId) clearInterval(globalNewsIntervalId);

  globalNewsIntervalId = setInterval(function () {
    globalNewscount++;

    $tickerWrapper.css({
      transition: "transform 0.5s ease-in-out",
      transform: `translateY(${-30 * globalNewscount}px)`
    });

    if (globalNewscount >= originalCount) {
      setTimeout(() => {
        $tickerWrapper.css({ transition: "none", transform: "translateY(0)" });
        globalNewscount = 0;
      }, 500);
    }
  }, 2000);
}

/**
 * ✅ JSON 정렬: 고정공지 우선 + 최신순
 * - json에 is_pinned(boolean) / publish(날짜 문자열) 있으면 사용
 * - 없으면 원본 순서 유지
 */
function sortNewsItems(items) {
  if (!Array.isArray(items)) return [];

  const hasPinned = items.some(x => typeof x?.is_pinned !== "undefined");
  const hasPublish = items.some(x => x?.publish || x?.published || x?.date);

  if (!hasPinned && !hasPublish) {
    // 정렬정보 없으면 그대로
    return items;
  }

  const getPinned = (x) => !!x?.is_pinned;
  const getDate = (x) => {
    const v = x?.publish || x?.published || x?.date;
    const t = v ? Date.parse(v) : 0;
    return Number.isNaN(t) ? 0 : t;
  };

  return [...items].sort((a, b) => {
    // pinned true 먼저
    if (hasPinned) {
      const ap = getPinned(a);
      const bp = getPinned(b);
      if (ap !== bp) return bp - ap; // true(1)가 앞으로
    }
    // 최신순
    if (hasPublish) {
      return getDate(b) - getDate(a);
    }
    return 0;
  });
}

/**
 * ✅ 카드뉴스(티커 + 본문 카드) 모두 JSON에서 로드
 * - ticker: #scrolling-headline
 * - dropdown: #scrolling-headline-dropdown (있으면)
 * - 본문 카드: #main-news-all-list
 */
function fetchCardNewsAndBody() {
  const jsonUrl = "json/news.json"; // ✅ 루트 기준

  $.ajax({
    url: jsonUrl,
    method: "GET",
    dataType: "json",
    cache: false,
    success: function (data) {
      let items = [];
      if (Array.isArray(data)) items = data;
      else if (data && Array.isArray(data.results)) items = data.results;

      // ✅ 정렬(가능하면 pinned + 최신순)
      items = sortNewsItems(items);

      // ✅ 최대 3개만 사용
      const topItems = items.slice(0, 3);

      // 1) ticker 업데이트 (DOM 없으면 스킵)
      updateCardNewsTicker(topItems);

      // 2) 본문 카드 업데이트
      updateMainNewsAllList(topItems);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching news.json:", textStatus, errorThrown);

      // ticker 숨기기 (있으면)
      $("#dropdownMenuButton").addClass("d-none");

      // 본문 영역 에러 표시
      const $row = document.querySelector("#main-news-all-list");
      if ($row) {
        $row.innerHTML = '<div class="text-center text-danger py-4">뉴스 로드 실패</div>';
      }
    }
  });
}

/**
 * ✅ ticker 영역 업데이트
 */
function updateCardNewsTicker(posts) {
  const $tickerWrapper = $("#scrolling-headline");
  const $dropdown = $("#scrolling-headline-dropdown");

  // ticker DOM이 없으면 조용히 종료
  if ($tickerWrapper.length === 0) return;

  if (!Array.isArray(posts) || posts.length === 0) {
    $tickerWrapper.html('<div class="ticker text-muted">No data available.</div>');
    if ($dropdown.length) {
      $dropdown.html('<li class="dropdown-item text-muted">No data available.</li>');
    }
    return;
  }

  // ticker html
  const tickerHTML = posts.map(p => {
    return `<div class="ticker">${truncateText(p.title)}</div>`;
  }).join("");

  // dropdown html (있으면)
  const dropdownHTML = posts.map((p, idx) => {
    return `<li><a class="dropdown-item" href="#bloc-3" data-news-index="${idx}">${truncateText(p.title)}</a></li>`;
  }).join("");

  // ✅ 기존 상태 초기화 (중복 복제/interval 방지)
  globalNewscount = 0;
  if (globalNewsIntervalId) clearInterval(globalNewsIntervalId);
  globalNewsIntervalId = null;

  $tickerWrapper.css({ transition: "none", transform: "translateY(0)" });
  $tickerWrapper.html(tickerHTML);

  if ($dropdown.length) {
    $dropdown.html(dropdownHTML);
  }

  // ✅ 무한 스크롤용 복제
  $tickerWrapper.append($tickerWrapper.html());

  // ✅ 시작
  startScrolling();
}

/**
 * ✅ 본문(카드) 3개 표시 (부트스트랩 카드 스타일)
 * - body는 HTML이므로 그대로 삽입
 */
function updateMainNewsAllList(posts) {
  const row = document.getElementById("main-news-all-list");
  if (!row) return;

  // row 초기화 (이전 상태 제거)
  row.innerHTML = "";
  row.classList.remove("justify-content-center");

  if (!Array.isArray(posts) || posts.length === 0) {
    row.innerHTML =
      '<div class="col-12 text-center text-muted py-4">뉴스가 없습니다.</div>';
    return;
  }

  // 카드 개수에 따른 col 클래스 결정
  const n = posts.length;
  let colClass = "col-12";

  if (n === 1) {
    row.classList.add("justify-content-center");
    colClass = "col-12 col-md-8 col-lg-6";
  } else if (n === 2) {
    colClass = "col-12 col-md-6";
  } else {
    colClass = "col-12 col-md-6 col-lg-4";
  }

  // 카드 생성
  const html = posts.map(post => {
    const title = (post.title || "").toString();
    const body  = post.body || "";

    return `
      <div class="${colClass} mb-4">
        <div class="card bg-dark text-white shadow-sm border-0 h-100">
          <div class="card-body">
            <div class="card-text news-card-text">
              ${body}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // ✅ row(#main-news-all-list) 안에 직접 뿌림
  row.innerHTML = html;
}