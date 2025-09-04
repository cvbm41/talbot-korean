function getPageUrlMainNewsAll() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 1;
  }
  
  function fetchMainNewsAllList(pageMainNews) {
    let flag = true;
    if (!flag) return;
    flag = false;
  
    const count = 3;
    const category = 'TPP';
    const apiUrl = globalUrl + '/api/articles/posts/' + '?page=' + pageMainNews + '&count=' + count + '&category=' + category;
    // $('#main-news-all-list').html(createUniformPlaceholder(3));
  
    $.ajax({
      url: apiUrl,
      method: "GET",
    //   headers: { 'Authorization': 'Bearer ' + accessToken },
      dataType: 'json', 
      success: function (response) {
        
        const totalCount = response.count;
        const page_size = response.page_size;
        const totalPages = Math.ceil(totalCount / page_size);
  
        updateMainNewsAllList(response.results);
        // globalUpdatePagination(totalPages, pageMainNews, '#pagination-main-news-all-div', fetchMainNewsAllList, 4);
  
        flag = true;
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data: ", textStatus, errorThrown);
        $('#main-news-all-list').html('<p>error : ----.</p>');
        flag = true;
      }
    });
  }

function updateMainNewsAllList(posts) {
  function createMainNewsAllListItem(post, index, colClass) {
    return `
      <div class="${colClass} mb-4">
        <p>${post.body || ''}</p>
      </div>
    `;
  }

  const $row = document.querySelector('#news-bloc .row');
  if (!posts || posts.length === 0) {
    $row.innerHTML = '<div class="text-center text-muted py-4">뉴스가 없습니다.</div>';
    return;
  }

  // 개수별 컬럼 클래스 결정
  const n = posts.length;
  let colClass = 'col-12';
  if (n === 1) {
    $row.classList.add('justify-content-center');
    colClass = 'col-12 col-md-8 col-lg-6';
  } else if (n === 2) {
    $row.classList.remove('justify-content-center');
    colClass = 'col-12 col-md-6';
  } else {
    $row.classList.remove('justify-content-center');
    colClass = 'col-12 col-md-6 col-lg-4';
  }

  // 최대 3개만 출력
  const listItems = posts.slice(0, 3).map((p, i) => createMainNewsAllListItem(p, i, colClass)).join('');

  $row.innerHTML = listItems;
}
  

  
//   function updateMainNewsAllList(posts) {
//     function createMainNewsAllListItem(post, index) {
//       return `
//       ${post.body}
//         `;
//     }
//     // <li class="list-group-item list-group-item-action" style="cursor: pointer;" data-id="${post.id}">${index + 1}. ${post.title}</li>
//     const listItems = posts.map(createMainNewsAllListItem).join('');
  
//     // '0번' 항목
//     const moreItem = `
//       `;
//     document.getElementById('main-news-all-list').innerHTML = moreItem + listItems;
//   }

//   function startMainNewsAllData() {
//     const pageMainNewsAll = getPageUrlMainNewsAll();
//     waitForLoginStatus(function () {
//       fetchMainNewsAllList(pageMainNewsAll);
//     });
//   }