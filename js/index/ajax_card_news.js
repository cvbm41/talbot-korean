//카드 뉴스 호출
let globalNewscount = 0; // 전역 변수로 선언
let globalNewstotalItems = 0;

function truncateText(text, maxLength = 20) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

function startScrolling() {
  const $tickerWrapper = $("#scrolling-headline");
  const tickerItems = $tickerWrapper.children();
  globalNewstotalItems = tickerItems.length;
  // 복제 전 원본 항목 수를 계산 (전체 항목의 절반)
  const originalCount = globalNewstotalItems / 2;

  if (originalCount === 0) return; // 항목이 없으면 실행하지 않음

  setInterval(function () {
    globalNewscount++;

    // 스크롤 애니메이션 적용
    $tickerWrapper.css({
      "transition": "transform 0.5s ease-in-out",
      "transform": `translateY(${-30 * globalNewscount}px)`
    });

    // 원본 항목까지 스크롤했으면 리셋 (복제 덕분에 자연스럽게 이어짐)
    if (globalNewscount >= originalCount) {
      setTimeout(() => {
        $tickerWrapper.css({
          "transition": "none",
          "transform": "translateY(0)"
        });
        globalNewscount = 0; // 다시 처음으로
      }, 500); // transition 시간(0.5초)와 동일하게
    }
  }, 2000); // 2초마다 실행
}


function fetchCardNews() {
  const semesterId = '1';
  const count = '3';
  const apiUrl = globalUrl + '/api/articles/posts/?semester=' + semesterId + '&count=' + count;

  $.ajax({
    url: apiUrl,
    method: "GET",
    dataType: 'json',
    success: function (response) {
      // console.log(response.results);
      updateCardNews(response.results);


      // ★ 최소 변경: ticker 내용을 복제하여 무한 스크롤 효과를 만듭니다.
      const $tickerWrapper = $("#scrolling-headline");
      $tickerWrapper.append($tickerWrapper.html());

      startScrolling(); // 데이터 업데이트 후 스크롤 시작
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#dropdownMenuButton').addClass('d-none');
      console.error("Error fetching data: ", textStatus, errorThrown);
      $('#cardnews-list').html('<p>Error loading data. Please try again.</p>');
    }
  });
}


function updateCardNews(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    $('#scrolling-headline').html('<p>No data available.</p>');
    $('#scrolling-headline-dropdown').html('<li>No data available.</li>');
  } else {
    const topPosts = posts.slice(0, 4);

    // Ticker Content
    const tickerHTML = topPosts.map(post => {
      return `<div class="ticker">${truncateText(post.title)}</div>`;
    }).join("");

    // Dropdown List Content ${post.absolute_url}
    const dropdownHTML = topPosts.map(post => {
      return `<li><a class="dropdown-item" href="#card-news-line">${truncateText(post.title)}</a></li>`;
    }).join("");

    $('#scrolling-headline').html(tickerHTML);
    $('#scrolling-headline-dropdown').html(dropdownHTML);
  }
}