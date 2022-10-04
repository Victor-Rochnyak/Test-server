import apiService from './api-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const galleryContainerRef = document.querySelector(
  '.gallery-section__container'
);
const galleryFetch = apiService.getTrendFilmsgetTrendFilms().then(results => {
    renderGallery(results);
    console.log(results);
});

function renderGallery() {
  const markup = apiService.galleryFilms
    .map(
      ({ id, poster_path, title, vote_average }) =>
        `
        <div class="gallery-container">
            <img class="gallery-img"
            src="https://image.tmdb.org/t/p/w300${poster_path}"
            alt="${title}" "id=${id}" 
            width="250"
            />
            <p class="vote-average">${vote_average}
            </p>
        </div>
        `
    )
    .join('');

  galleryContainerRef.innerHTML = markup;
}


