// const globalUrl = "http://127.0.0.1:8000"
const globalUrl = "https://250204.aisystem64.org"
// const globalUrl = "https://excaatch.asuscomm.com:8443"

// "https://250204.aisystem64.org"

var accessToken = localStorage.getItem("access_token");
var refreshToken = localStorage.getItem("refresh_token");

let totalPages = 1;
let currentPage = 1;
let page_size = null;
let nextPageUrl = null;
let prevPageUrl = null;

function waitForLoginStatus(callback) {
    let retryCount = 0;
    let maxRetries = 3;
    let intervalMs = 1000;

    function check() {
        if (globalIsLogin === null && retryCount < maxRetries) {
            // console.log(`로그인 상태 확인 중... (${retryCount + 1}/${maxRetries})`);
            retryCount++;
            setTimeout(check, intervalMs);
        } else {
            if (globalIsLogin === null) {
                // console.warn("로그인 상태 응답 없음. 상태가 null이지만 작업을 계속 진행합니다.");
            }
            callback();
        }
    }

    check();
}

$(document).ready(function () {
    const myModal = document.getElementById('myModal');
    const myInput = document.getElementById('myInput');

    // 요소가 존재하는지 확인
    if (myModal && myInput) {
        myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus();
        });
    } else {
    }
});