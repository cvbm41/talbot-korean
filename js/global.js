var globalUrl = "";

if (location.hostname === "talbot-korean.com") {
  globalUrl = "https://250204.aisystem64.org";
  // apiGlobalURL = 'https://excaatch.asuscomm.com:8443';
  console.log("Using Production API URL");
} else if (location.hostname === "rr720.synology.me") {
  globalUrl = "http://127.0.0.1:8000";
  console.log("Using Local API URL");
}

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