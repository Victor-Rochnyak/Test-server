import apiService from './api-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const galleryContainerRef = document.querySelector(
  '.gallery-section__container'
);
const galleryFetch = apiService.getTrendFilms().then(results => {
  renderGallery(results);
  console.log(results);
});

export function renderGallery() {
  const markup = apiService.galleryFilms
    .map(
      ({ id, poster_path, title, vote_average }) => `
        <div class="gallery-container">
            <div class="ldBar label-center"
                 data-stroke="data:ldbar/res,gradient(0,0,#37ff00,#ff0000)" 
                 data-value="${vote_average}" 
                 data-preset="circle"
                 data-max="10"
                 data-precision="0.1"
                 data-transition-in="300"
                 data-stroke-width="10"
                 data-stroke-trail='none'
                 data-stroke-trail-width='0'
            >
        </div>
            <img class="gallery-img"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
            alt="${title}" "id=${id}" 
            width="250"
            />
        </div>`
    )
    .join('');
    
  galleryContainerRef.innerHTML = markup;
  

}
