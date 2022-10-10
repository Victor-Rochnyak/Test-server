import local_storage from '../gallery/local-storage';
import api from '../api/api';

const URL_FOR_SEARCH = 'https://api.themoviedb.org/3/search/keyword?api_key=74cf07cbcff58397c32fe332f07646fa'

const refs = {
    galleryEl: document.querySelector('gallery'),
    formInput: document.querySelector('#inputValue'),
    submitBtn: document.querySelector('#search'),
}

refs.submitBtn.addEventListener('click', onSearch);

function onSearch(evt) {
    evt.preventDefault();
    const inputValue = refs.formInput.value;

    if (inputValue) {
        searchMovie(inputValue);
    }
    resetInput();
}

function resetInput() {
    refs.formInput.value = '';
}

function searchMovie(value) {
    const url = URL_FOR_SEARCH + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleGeneralError);
}

function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function handleGeneralError(error) {
    console.log('Error: ', error.message);
}

function renderSearchMovies(data) {
    refs.galleryEl.innerHTML = '';
    const moviesBlock = generateMoviesBlock(data);
    refs.galleryEl.insertAdjacentHTML("beforeend", moviesBlock);
}

function generateMoviesBlock(data) {
    const markup = data.map(({ poster_path, title, name, release_date, first_air_date, genre_ids
    }) => {
        let str = `<div class="photo-card"><a class="link" href=""><img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" loading="lazy" /></a>
           <div class="info"><p class="film-name">${title}</p><p class="genre">${genre_ids} | ${release_date}</p></div></div>`;
        return str;
    }).join("");

    return markup;
}
