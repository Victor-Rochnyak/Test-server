
// import axios from 'axios';
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '74cf07cbcff58397c32fe332f07646fa';



//  class MoviesApiService {
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//     this.lang = '';
//     this.genre = '';
//     this.year = '';
//     this.originalLanguage = '';
//     this.vote = '';
//     this.sliderFilms = [];
//     this.galleryFilms = [];
//   }

//   // slider-fetch
//   async getPopularFilms() {
//     try {
//       const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${this.lang}&page=${this.page}`;
//       const response = await axios.get(url);
//       this.sliderFilms = response.data.results;

//       return response.data.results;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }
//   // gallery-fetch
//   async getTrendFilms() {
//     try {
//       const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=${this.lang}`;
//       const response = await axios.get(url);
//       this.galleryFilms = response.data.results;

//       return response.data.results;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }

//   async getFilmsByName() {
//     try {
//       const searchParams = new URLSearchParams({
//         api_key: '74cf07cbcff58397c32fe332f07646fa',
//         query: this.searchQuery,
//         language: 'en-US',
//         page: this.page,
//         include_adult: false,
//       });
//       const url = `${BASE_URL}search/movie?${searchParams}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }

//   async getFilmDetails(id) {
//     try {
//       const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }

//   async getFilmVideo(id) {
//     try {
//       const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=${this.lang}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }

//   async getFilteredMovies() {
//     try {
//       const searchParams = new URLSearchParams({
//         api_key: '74cf07cbcff58397c32fe332f07646fa',
//         language: this.lang,
//         sort_by: 'popularity.desc',
//         page: this.page,
//         include_adult: false,
//         with_genres: this.genre,
//         primary_release_year: this.year,
//         with_original_language: this.originalLanguage,
//       });
//       const url = `${BASE_URL}discover/movie?${searchParams}&vote_average.gte=${this.vote}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   setLang(newLang) {
//     this.lang = newLang;
//   }

//   getLang() {
//     return this.lang;
//   }

//   incrementPage() {
//     this.page += 1;
//   }
//   decrementPage() {
//     this.page -= 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }
// }


// const apiService = new MoviesApiService();
// export default apiService;



// import axios from 'axios';
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '74cf07cbcff58397c32fe332f07646fa';


//  export class MoviesApiService {
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//     this.lang = '';
//     this.genre = '';
//     this.year = '';
//     this.originalLanguage = '';
//     this.vote = '';
//     this.sliderFilms = [];
//     this.galleryFilms = [];
//   }

//   // slider-fetch
//   async getPopularFilms() {
//     try {
//       const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${this.lang}&page=${this.page}`;
//       const response = await axios.get(url);
//       this.sliderFilms = response.data.results;

//       return response.data.results;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }
//   // gallery-fetch
//   async getTrendFilmsgetTrendFilms() {
//     try {
//       const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=${this.lang}`;
//       const response = await axios.get(url);
//       this.galleryFilms = response.data.results;

//       return response.data.results;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }

//   async getFilmsByName() {
//     try {
//       const searchParams = new URLSearchParams({
//         api_key: '74cf07cbcff58397c32fe332f07646fa',
//         query: this.searchQuery,
//         language: 'en-US',
//         page: this.page,
//         include_adult: false,
//       });
//       const url = `${BASE_URL}search/movie?${searchParams}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }

//   async getFilmDetails(id) {
//     try {
//       const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }

//   async getFilmVideo(id) {
//     try {
//       const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=${this.lang}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }

//   async getFilteredMovies() {
//     try {
//       const searchParams = new URLSearchParams({
//         api_key: '74cf07cbcff58397c32fe332f07646fa',
//         language: this.lang,
//         sort_by: 'popularity.desc',
//         page: this.page,
//         include_adult: false,
//         with_genres: this.genre,
//         primary_release_year: this.year,
//         with_original_language: this.originalLanguage,
//       });
//       const url = `${BASE_URL}discover/movie?${searchParams}&vote_average.gte=${this.vote}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   setLang(newLang) {
//     this.lang = newLang;
//   }

//   getLang() {
//     return this.lang;
//   }

//   incrementPage() {
//     this.page += 1;
//   }
//   decrementPage() {
//     this.page -= 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }
// }

// const apiService = new MoviesApiService();
// export default apiService;
// 
// 
// 
// 
// 
// 
// 

// export default class ApiService {
//   static API_KEY = '74cf07cbcff58397c32fe332f07646fa';
//   static BASE_URL = 'https://api.themoviedb.org/3';

//   constructor() {
//     this.searchName = '';
//     this.backupSearchName = '';

//     this.films = null;
//     this.watched = JSON.parse(localStorage.getItem('watched')) ?? [];
//     this.qeue = JSON.parse(localStorage.getItem('qeue')) ?? [];

//     this.allGenres = null;
//     this.sliderFilms = [];

//     //pagination
//     this.page = 1;
//     this.totalPages = 1000;

//     this.watchedPage = 1;
//     this.totalWatchedPages = 77;

//     this.qeuePage = 1;
//     this.totalQeuePages = 99;
//   }

//   async fetchFilms() {
//     try {
//       const url = `${ApiService.BASE_URL}/trending/movie/week?api_key=${ApiService.API_KEY}`;
//       const data = await axios.get(url);

//       this.films = data.data.results;
//       this.page = data.data.page;
//       this.totalPages = data.data.total_pages;
//       this.sliderFilms = data.data.results;

//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchFilmsByName() {
//     try {
//       const url = `${ApiService.BASE_URL}/search/movie?api_key=${ApiService.API_KEY}&query=${this.searchName}`;
//       const data = await axios.get(url);

//       if (data.data.results.length) {
//         this.page = data.data.page;
//         this.totalPages = data.data.total_pages;
//         this.films = data.data.results;
//         this.backupSearchName = this.searchName;
//       }

//       if (!data.data.results.length) {
//         refs.failureMessage.innerHTML = 'Search result not successful';
//         setTimeout(() => {
//           refs.failureMessage.innerHTML = '';
//         }, 900);
//         this.bk = Number(
//           refs.paginationControls.querySelector('.js-current').textContent
//         );
//         if (this.backupSearchName) {
//           this.searchName = this.backupSearchName;
//           this.page = this.bk;

//           const url = `${ApiService.BASE_URL}/search/movie?api_key=${ApiService.API_KEY}&query=${this.searchName}&page=${this.bk}`;
//           const data = await axios.get(url);

//           return data.data.results;
//         } else if (!this.backupSearchName) {
//           this.searchName = '';

//           const url = `${ApiService.BASE_URL}/trending/movie/week?api_key=${ApiService.API_KEY}&page=${this.bk}`;
//           const data = await axios.get(url);
//           this.page = data.data.page;
//           this.totalPages = data.data.total_pages;
//           return data.data.results;
//         }
//       }

//       scrollToContent();
//       return data.data.results;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchFilmsByPage() {
//     try {
//       spinnerOn();

//       let url = '';
//       if (this.searchName) {
//         url = `${ApiService.BASE_URL}/search/movie?api_key=${ApiService.API_KEY}&query=${this.searchName}&page=${this.page}`;
//       } else {
//         url = `${ApiService.BASE_URL}/trending/movie/week?api_key=${ApiService.API_KEY}&page=${this.page}`;
//       }

//       const data = await axios.get(url).finally(() => {
//         spinnerOff();
//       });

//       this.films = data.data.results;
//       this.totalPages = data.data.total_pages;

//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   fetchWatched() {
//     const perPage = 3;
//     this.totalWatchedPages =
//       this.watched.length < perPage
//         ? 1
//         : Math.ceil(this.watched.length / perPage);

//     if (this.watched.length > perPage) {
//       this.films =
//         this.watchedPage === 1
//           ? this.watched.slice(0, perPage)
//           : this.watched.slice(
//               (this.watchedPage - 1) * perPage,
//               this.watchedPage * perPage
//             );
//     } else {
//       this.watchedPage = 1;
//       this.films = this.watched;
//     }
//     if (!this.films.length) {
//       this.watchedPage -= 1;
//       this.films = this.watched.slice(
//         (this.watchedPage - 1) * perPage,
//         this.watchedPage * perPage
//       );
//     }
//     return this.films;
//   }

//   fetchQeue() {
//     const perPage = 3;
//     this.totalQeuePages =
//       this.qeue.length < perPage ? 1 : Math.ceil(this.qeue.length / perPage);
//     if (this.qeue.length > perPage) {
//       this.films =
//         this.qeuePage === 1
          // ? this.qeue.slice(0, perPage)
//           : this.qeue.slice(
//               (this.qeuePage - 1) * perPage,
//               this.qeuePage * perPage
//             );
//     } else {
//       this.qeuePage = 1;
//       this.films = this.qeue;
//     }
//     if (!this.films.length) {
//       this.qeuePage -= 1;
//       this.films = this.qeue.slice(
//         (this.qeuePage - 1) * perPage,
//         this.qeuePage * perPage
//       );
//     }
//     return this.films;
//   }

//   async fetchGenres() {
//     const genres = localStorage.getItem('genres');

//     if (genres) {
//       this.allGenres = JSON.parse(genres);

//       return this.allGenres;
//     } else {
//       try {
//         const url = `${ApiService.BASE_URL}/genre/movie/list?api_key=${ApiService.API_KEY}`;
//         const data = await axios.get(url);

//         localStorage.setItem('genres', JSON.stringify(data.data.genres));
//         this.allGenres = data.data.genres;

//         return this.allGenres;
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }
// }






const API_KEY = `74cf07cbcff58397c32fe332f07646fa`
const image_path = `https://image.tmdb.org/t/p/w1280`

// - API key will only be available for this video since I'll delete it right after that but you can go to https://www.themoviedb.org/ , create an account and get a key for free.
// - Image path is only the base url from where we'll get the images.

const input = document.querySelector('.search input')
const btn = document.querySelector('.search button')
const main_grid_title = document.querySelector('.favorites h1')
const main_grid = document.querySelector('.favorites .movies-grid')

const trending_el = document.querySelector('.trending .movies-grid')

const popup_container = document.querySelector('.popup-container')

function add_click_effect_to_card (cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => show_popup(card))
    })
}

// SEARCH MOVIES
async function get_movie_by_search (search_term) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`)
    const respData = await resp.json()
    return respData.results
}

btn.addEventListener('click', add_searched_movies_to_dom)

async function add_searched_movies_to_dom () {
    const data = await get_movie_by_search(input.value)

    main_grid_title.innerText = `Search Results...`
    main_grid.innerHTML = data.map(e => {
        return `
            <div class="card" data-id="${e.id}">
                <div class="img">
                    <img src="${image_path + e.poster_path}">
                </div>
                <div class="info">
                    <h2>${e.title}</h2>
                    <div class="single-info">
                        <span>Rate: </span>
                        <span>${e.vote_average} / 10</span>
                    </div>
                    <div class="single-info">
                        <span>Release Date: </span>
                        <span>${e.release_date}</span>
                    </div>
                </div>
            </div>
        `
    }).join('')

    const cards = document.querySelectorAll('.card')
    add_click_effect_to_card(cards)
}

// POPUP
async function get_movie_by_id (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData
}
async function get_movie_trailer (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData.results[0].key
}

async function show_popup (card) {
    popup_container.classList.add('show-popup')

    const movie_id = card.getAttribute('data-id')
    const movie = await get_movie_by_id(movie_id)
    const movie_trailer = await get_movie_trailer(movie_id)

    popup_container.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(${image_path + movie.poster_path})`

    popup_container.innerHTML = `
            <span class="x-icon">&#10006;</span>
            <div class="content">
                <div class="left">
                    <div class="poster-img">
                        <img src="${image_path + movie.poster_path}" alt="">
                    </div>
                    <div class="single-info">
                        <span>Add to favorites:</span>
                        <span class="heart-icon">&#9829;</span>
                    </div>
                </div>
                <div class="right">
                    <h1>${movie.title}</h1>
                    <h3>${movie.tagline}</h3>
                    <div class="single-info-container">
                        <div class="single-info">
                            <span>Language:</span>
                            <span>${movie.spoken_languages[0].name}</span>
                        </div>
                        <div class="single-info">
                            <span>Length:</span>
                            <span>${movie.runtime} minutes</span>
                        </div>
                        <div class="single-info">
                            <span>Rate:</span>
                            <span>${movie.vote_average} / 10</span>
                        </div>
                        <div class="single-info">
                            <span>Budget:</span>
                            <span>$ ${movie.budget}</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date:</span>
                            <span>${movie.release_date}</span>
                        </div>
                    </div>
                    <div class="genres">
                        <h2>Genres</h2>
                        <ul>
                            ${movie.genres.map(e => `<li>${e.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="overview">
                        <h2>Overview</h2>
                        <p>${movie.overview}</p>
                    </div>
                    <div class="trailer">
                        <h2>Trailer</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${movie_trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
    `
    const x_icon = document.querySelector('.x-icon')
    x_icon.addEventListener('click', () => popup_container.classList.remove('show-popup'))

    const heart_icon = popup_container.querySelector('.heart-icon')

    const movie_ids = get_LS()
    for(let i = 0; i <= movie_ids.length; i++) {
        if (movie_ids[i] == movie_id) heart_icon.classList.add('change-color')
    }

    heart_icon.addEventListener('click', () => {
        if(heart_icon.classList.contains('change-color')) {
            remove_LS(movie_id)
            heart_icon.classList.remove('change-color')
        } else {
            add_to_LS(movie_id)
            heart_icon.classList.add('change-color')
        }
        fetch_favorite_movies()
    })
}

// Local Storage
function get_LS () {
    const movie_ids = JSON.parse(localStorage.getItem('movie-id'))
    return movie_ids === null ? [] : movie_ids
}
function add_to_LS (id) {
    const movie_ids = get_LS()
    localStorage.setItem('movie-id', JSON.stringify([...movie_ids, id]))
}
function remove_LS (id) {
    const movie_ids = get_LS()
    localStorage.setItem('movie-id', JSON.stringify(movie_ids.filter(e => e !== id)))
}

// Favorite Movies
fetch_favorite_movies()
async function fetch_favorite_movies () {
    main_grid.innerHTML = ''

    const movies_LS = await get_LS()
    const movies = []
    for(let i = 0; i <= movies_LS.length - 1; i++) {
        const movie_id = movies_LS[i]
        let movie = await get_movie_by_id(movie_id)
        add_favorites_to_dom_from_LS(movie)
        movies.push(movie)
    }
}

function add_favorites_to_dom_from_LS (movie_data) {
    main_grid.innerHTML += `
        <div class="card" data-id="${movie_data.id}">
            <div class="img">
                <img src="${image_path + movie_data.poster_path}">
            </div>
            <div class="info">
                <h2>${movie_data.title}</h2>
                <div class="single-info">
                    <span>Rate: </span>
                    <span>${movie_data.vote_average} / 10</span>
                </div>
                <div class="single-info">
                    <span>Release Date: </span>
                    <span>${movie_data.release_date}</span>
                </div>
            </div>
        </div>
    `

    const cards = document.querySelectorAll('.card')
    add_click_effect_to_card(cards)
}

// Trending Movies
get_trending_movies()
async function get_trending_movies () {
    const resp = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData.results
}

add_to_dom_trending()
async function add_to_dom_trending () {

    const data = await get_trending_movies()
    console.log(data);

    trending_el.innerHTML = data.slice(0, 5).map(e => {  // .slice(0, 5) - ставит 5 фильмов на гланом екране
        return `
            <div class="card" data-id="${e.id}">
                <div class="img">
                    <img src="${image_path + e.poster_path}">
                </div>
                <div class="info">
                    <h2>${e.title}</h2>
                    <div class="single-info">
                        <span>Rate: </span>
                        <span>${e.vote_average} / 10</span>
                    </div>
                    <div class="single-info">
                        <span>Release Date: </span>
                        <span>${e.release_date}</span>
                    </div>
                </div>
            </div>
        `
    }).join('')
}