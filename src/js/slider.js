
import MoviesApiService from './api-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const apiService = new MoviesApiService();

const sliderContainer = document.querySelector('.swiper-slide');
const sliderFetch = apiService
  .getPopularFilms()
  .then(results => renderSlider(results));
// renderSlider(results)

function renderSlider() {
  const markup = apiService.sliderFilms
    .map(
      ({ id, poster_path, title }) =>
        `<div class="">
              <img class="slider__img"
              src="https://image.tmdb.org/t/p/w200${poster_path}" 
              alt=${title} id=${id} 
              loading="lazy" 
              />
          </div>`
    )
    .join('');

  sliderContainer.innerHTML = markup;
}

//! var swiper = new Swiper('.mySwiper', {
//   disableOnInteraction: true,
//   slidesPerView: 7,
//   spaceBetween: 40,
//   slidesPerGroup: 1,
//   centralSlides: true,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   grabCursor: true,
//   speed: 1000,
//   effect: 'coverflow',
//   coverflowEffect: {
//     rotate: 10,
//     stretch: 50,
//     slideShadows: true,
//   },
//   pagination: {
//     clickable: true,
//     el: '.swiper-pagination',
//     // dynamicBullets: true,
//     type: 'progressbar',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   // virtual: function () {
//   //   let slide = [];
//   //   for (let i = 0; i < 500; i++) {
//   //     slide.push('.swiper-wrapper');
//   //   }
//   // },
// });

// let sliderBlock = document.querySelector('.card');

// sliderBlock.addEventListenner('mouseenter', function (e) {
//   swiper.params.autoplay.disableOnInteraction = false;
//   swiper.params.autoplay.delay = 500;
//   swiper.autoplay.stop();
// });

// sliderBlock.addEventListenner('mouseleave', function (e) {
//   swiper.autoplay.start();
// });
