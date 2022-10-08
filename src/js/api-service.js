import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '74cf07cbcff58397c32fe332f07646fa';



 class MoviesApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.lang = '';
    this.genre = '';
    this.year = '';
    this.originalLanguage = '';
    this.vote = '';
    this.sliderFilms = [];
    this.galleryFilms = [];
  }

  // slider-fetch
  async getPopularFilms() {
    try {
      const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${this.lang}&page=${this.page}`;
      const response = await axios.get(url);
      this.sliderFilms = response.data.results;

      return response.data.results;
    } catch (error) {
      Notify.failure('Oops, an error occurred');
    }
  }
  // gallery-fetch
  async getTrendFilms() {
    try {
      const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=${this.lang}`;
      const response = await axios.get(url);
      this.galleryFilms = response.data.results;

      return response.data.results;
    } catch (error) {
      Notify.failure('Oops, an error occurred');
    }
  }

  async getFilmsByName() {
    try {
      const searchParams = new URLSearchParams({
        api_key: '74cf07cbcff58397c32fe332f07646fa',
        query: this.searchQuery,
        language: 'en-US',
        page: this.page,
        include_adult: false,
      });
      const url = `${BASE_URL}search/movie?${searchParams}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getFilmDetails(id) {
    try {
      const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      Notify.failure('Oops, an error occurred');
    }
  }

  async getFilmVideo(id) {
    try {
      const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=${this.lang}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      Notify.failure('Oops, an error occurred');
    }
  }

  async getFilteredMovies() {
    try {
      const searchParams = new URLSearchParams({
        api_key: '74cf07cbcff58397c32fe332f07646fa',
        language: this.lang,
        sort_by: 'popularity.desc',
        page: this.page,
        include_adult: false,
        with_genres: this.genre,
        primary_release_year: this.year,
        with_original_language: this.originalLanguage,
      });
      const url = `${BASE_URL}discover/movie?${searchParams}&vote_average.gte=${this.vote}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  setLang(newLang) {
    this.lang = newLang;
  }

  getLang() {
    return this.lang;
  }

  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
  }
}


const apiService = new MoviesApiService();
export default apiService;


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
//           ? this.qeue.slice(0, perPage)
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
