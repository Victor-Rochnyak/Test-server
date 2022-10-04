import apiService from './api-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const sliderContainerRef = document.querySelector('.swiper-wrapper');
const sliderFetch = apiService.getPopularFilms().then(results => {
  renderSlider(results);
});

function renderSlider() {
  const markup = apiService.sliderFilms
    .map(
      ({ id, poster_path, title, vote_average, backdrop_path }) =>
        `<div class="swiper-slider__wrapper swiper-slide">
              <img class="slide-img"
              src="https://image.tmdb.org/t/p/w200${poster_path}" 
              alt="${title}" "id=${id}" 
              width=""
              />

          </div>`
    )
    .join('');

    sliderContainerRef.innerHTML = markup;
    
    const swiper = new Swiper('.swiper', {
      disableOnInteraction: true,
      slidesPerView: 7,
      slidesPerGroup: 1,
      spaceBetween: 65,
      speed:3500,
      // centralSlides: true,
      loop: true,
      
    
      grabCursor: true,
      effect: 'coverflow',
      coverflowEffect: {
        //modifier:5, //для mobile
        depth: 70,
        rotate: 8,
        stretch: 50,
        slideShadows: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter:true,
    
      },
      // freeMode: true,
    });
  }

