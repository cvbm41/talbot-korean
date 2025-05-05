//유투브 호출
function fetchYoutubeShort() {

    // const apiUrl = globalUrl + '/api/articles/send_youtube_short/';
    const apiUrl = 'https://youtube-short.bluest-dealers0m.workers.dev';

    $.ajax({
        url: apiUrl,
        method: "GET",
        dataType: 'json',
        success: function (response) {
            updateYoutubeShort(response.results);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Error fetching data: ", textStatus, errorThrown);
            $('#youtube-short-list').html('<p>Error loading data. Please try again.</p>');
        }
    });
}

function updateYoutubeShort(youtube_shorts) {
    if (!Array.isArray(youtube_shorts) || youtube_shorts.length === 0) {
        $('#youtube-short-list').html('<p>No data available.</p>');
    } else {
        // 카드 하나하나 생성 (카드 스타일은 기존과 동일)
        const cardsHTML = youtube_shorts.map(youtube_short => {
            // video_tag를 공백 기준으로 분리 후 badge 처리
            const videoTags = youtube_short.video_tag.split(" ").map(tag => {
                return `<span class="badge text-bg-secondary">${tag}</span>`;
            }).join(" ");
            // <p class="card-text text-secondary opacity-75 flex-grow-1">${videoTags}</p>  <div style="border-top: 1px solid #dee2e6; width: 87%; margin: auto;"></div> <small class="text-body-secondary p-3">${youtube_short.video_title}</small>

            return `
      <div class="p-2" style="flex: 1;">
        <div class="card h-100 border-0 d-flex flex-column rounded-4"
            style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); width: 120%; me-3">
          <div class="card-img-container" style="position: relative; width: 100%; height: 0; padding-top: 180%; overflow: hidden;">
            <img src="${youtube_short.thumbnail_url}" class="card-img-top" alt="Thumbnail"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"/>
          </div>
          <div class="card-body bg-dark  d-flex align-items-center flex-column " style="flex-grow: 1; border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;">
            <div class="d-flex align-items-center mt-auto" >
              <a href="${youtube_short.video_url}" class="btn btn-dark  d-flex justify-content-center align-items-center"
                target="_blank" style="width: 50px; height: 50px; border-radius: 8px;">
                <i class="fs-6 ri-play-large-fill"></i>
              </a>
            </div>
          </div>
         
        </div>
      </div>
      `;
        }).join("");

        // 두 그룹 모두 같은 카드들을 포함하도록 구성
        const carouselHTML = `
      <div class="carousel">
        <div class="group" id="carousel-group-1">
          ${cardsHTML}
        </div>
        <div class="group" aria-hidden="true" id="carousel-group-2">
          ${cardsHTML}
        </div>
      </div>
    `;

        $('#youtube-short-list').html(carouselHTML);
    }
}