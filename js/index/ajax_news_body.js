function getPageUrlMainNewsAll() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 1;
  }
  
  function fetchMainNewsAllList(pageMainNews) {
    let flag = true;
    if (!flag) return;
    flag = false;
  
    const count = 3;
    const semester = 16;
    const apiUrl = globalUrl + '/api/articles/posts/' + '?page=' + pageMainNews + '&count=' + count + '&semester=' + semester;
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
    function createMainNewsAllListItem(post, index) {
      const tempDiv = document.createElement('div');
    //   tempDiv.innerHTML = post.body;
  
    //   const titleEl = tempDiv.querySelector('strong');
    //   const title = titleEl ? titleEl.innerText : post.title;
  
      return `
        <div class="col-md-4">
          <p class="mg-md fs-5">
          </p>
          <p>${post.body}</p>
        </div>
      `;
    }
  
    const listItems = posts.slice(0, 3).map(createMainNewsAllListItem).join('');
  
    const moreItem = ''; // 필요 시 버튼 등 추가 가능
  
    // 상위 .row 요소 안에 렌더링
    document.querySelector('#news-bloc .row').innerHTML = moreItem + listItems;
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