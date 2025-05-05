const carousel = document.querySelector('#carouselExampleAutoplaying');
const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
let userInteracted = false;

function goToSlide(index) {
  carouselInstance.to(index);
  if (!userInteracted) {
    carouselInstance.pause();
    userInteracted = true;
  }
}



// const carousel = document.querySelector('#carouselExampleAutoplaying');
// const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
// let userInteracted = false;

// function   const carousel = document.querySelector('#carouselExampleAutoplaying');
// const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
// let userInteracted = false;

// function goToSlide(index) {
//   carouselInstance.to(index);
//   if (!userInteracted) {
//     carouselInstance.pause();
//     userInteracted = true;
//   }
// }(index) {
//   carouselInstance.to(index);
//   if (!userInteracted) {
//     carouselInstance.pause();
//     userInteracted = true;
//   }
// }