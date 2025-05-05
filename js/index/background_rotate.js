  //시작 배경 랜덤
  function setRandomBackgroundImage() {
    const bgImages = ['01.png', '02.png', '03.png'];
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    const selectedImage = bgImages[randomIndex];

    const bloc = document.getElementById('bloc-1');
    bloc.style.backgroundImage = `url('img/${selectedImage}')`;
  }


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  //배경 랜덤 전환
  document.addEventListener('DOMContentLoaded', function () {
    const bloc = document.getElementById("bloc-1");

    // 기존 자식들을 감싸는 wrapper 생성 (콘텐츠가 배경 전환 오버레이 위에 있도록)
    const contentWrapper = document.createElement('div');
    while (bloc.firstChild) {
      contentWrapper.appendChild(bloc.firstChild);
    }
    bloc.appendChild(contentWrapper);

    // contentWrapper에 중앙 정렬 스타일 적용
    contentWrapper.style.position = "relative";
    contentWrapper.style.zIndex = "2";
    contentWrapper.style.width = "100%";
    contentWrapper.style.height = "100%";
    contentWrapper.style.display = "flex";
    contentWrapper.style.justifyContent = "center";
    contentWrapper.style.alignItems = "center";

    // 변경할 이미지 목록 및 랜덤 순서로 섞기
    let images = ["img/01.png", "img/02.png", "img/03.png"];
    images = shuffleArray(images);

    let currentIndex = 0;
    // 초기 배경 이미지 설정 (콘텐츠 뒤 배경)
    bloc.style.backgroundImage = "url('" + images[currentIndex] + "')";
    bloc.style.backgroundSize = "cover";
    bloc.style.backgroundPosition = "center";

    setInterval(function () {
      currentIndex = (currentIndex + 1) % images.length;

      // 새 배경 이미지를 위한 임시 오버레이 생성
      const fadeDiv = document.createElement('div');
      fadeDiv.style.position = "absolute";
      fadeDiv.style.top = "0";
      fadeDiv.style.left = "0";
      fadeDiv.style.width = "100%";
      fadeDiv.style.height = "100%";
      fadeDiv.style.backgroundImage = "url('" + images[currentIndex] + "')";
      fadeDiv.style.backgroundSize = "cover";
      fadeDiv.style.backgroundPosition = "center";
      fadeDiv.style.opacity = "0";
      fadeDiv.style.transition = "opacity 1s ease";
      fadeDiv.style.zIndex = "1"; // 콘텐츠(z-index 2)보다 아래에 위치

      bloc.appendChild(fadeDiv);
      setTimeout(function () {
        fadeDiv.style.opacity = "1";
      }, 50);

      setTimeout(function () {
        bloc.style.backgroundImage = fadeDiv.style.backgroundImage;
        bloc.removeChild(fadeDiv);
      }, 1050);

    }, 5000);
  });

// 초기버전
// document.addEventListener('DOMContentLoaded', function() {
//   const bloc = document.getElementById("bloc-1");
//   // 변경할 이미지 목록
//   var images = ["img/01.png", "img/02.png", "img/03.png"];

//   // 1. 이미지 배열을 랜덤 순서로 섞음 → 이때 첫번째 이미지가 초기 배경이 됨
//   images = shuffleArray(images);

//   // 2. 초기 배경 이미지를 랜덤하게(섞인 배열의 첫 요소로) 설정
//   var currentIndex = 0;
//   bloc.style.backgroundImage = "url('" + images[currentIndex] + "')";

//   // 3. 5초마다 섞인 순서대로 배경 이미지를 순환
//   setInterval(function() {
//     currentIndex = (currentIndex + 1) % images.length;
//     bloc.style.backgroundImage = "url('" + images[currentIndex] + "')";
//   }, 5000);
// });