// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';

// // const URL_TRENDING_FILMS = 'https://api.themoviedb.org/3/trending/all/day?api_key=74cf07cbcff58397c32fe332f07646fa';
// const options = {
//   totalItems: 1000,
//   itemsPerPage: 10,
//   visiblePages: 8,
//   page: 1,
//   centerAlign: false,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//       '</a>'
//   }
// };

// const pagination = new Pagination('pagination', options);

// pagination.reset();

//     refs.photosList.innerHTML = markup;
//   } catch (error) {
//     refs.photosList.innerHTML = '';
//   }
// }

// const filmsApi = new MoviesApiService();



// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
// import apiService from '../js/api-service';
// import { render } from '../js/api-service';
// const unsplashAPI = apiService;
// const options = {
//   totalItems: 0,
//   itemsPerPage: 5,
//   visiblePages: 4,
//   page: 1,
// };
// const refs = {
//     photosList: document.querySelector('.gallery'),
//     paginationContainer: document.querySelector('.tui-pagination'),
//   };
// const pagination = new Pagination('tui-pagination-container', options);
// const page = pagination.getCurrentPage();

// unsplashAPI.getPopularFilms(page).then(({ results, total }) => {
//   pagination.reset(total);
//   const markup = render(results);
//   refs.photosList.insertAdjacentHTML('beforeend', markup);
//   refs.paginationContainer.classList.remove('is-hidden');
// });
// async function trendMovie(event) {
//   const currentPage = event.page;
//   try {
//     const { results } = await unsplashAPI.getPopularFilms(currentPage);
//     const markup = render(results);
//     refs.photosList.innerHTML = markup;
//   } catch (error) {
//     refs.paginationContainer.classList.add('is-hidden');
//   }
// }
// pagination.on('afterMove', trendMovie);
// const handleSubmit = async event => {
//   event.preventDefault();
//   const { query } = event.target.elements;
//   const searchQuery = query.value.trim();
//   if (!searchQuery) {
//     Notify.failure('Введіть дані для пошуку!');
//     return;
//   }
//   refs.photosList.innerHTML = '';
//   unsplashAPI.query = searchQuery;
//   pagination.off('afterMove', trendMovie);
//   pagination.off('afterMove', handleMoreClick);
//   pagination.on('afterMove', handleMoreClick);
//   try {
//     console.log('start');
//     const { results, total } = await unsplashAPI.getFilmsByName(page);
//     if (total === 0) {
//       Notify.failure(`По запиту ${searchQuery} ми знайшли ${total} картинок`);
//       refs.paginationContainer.classList.add('is-hidden');
//       refs.photosList.innerHTML = '';
//       return;
//     }
//     pagination.reset(total);
//     const markup = render(results);
//     refs.photosList.innerHTML = markup;
//     refs.paginationContainer.classList.remove('is-hidden');
//   } catch (error) {
//     refs.paginationContainer.classList.add('is-hidden');
//     refs.photosList.innerHTML = '';
//   } finally {
//     console.log('end');
//   }
// };
// refs.photosForm.addEventListener('submit', handleSubmit);
// async function handleMoreClick(event) {
//   const currentPage = event.page;
//   try {
//     const { results } = await unsplashAPI.getFilmsByName(currentPage);
//     const markup = render(results);
//     refs.photosList.innerHTML = markup;
//   } catch (error) {
//     refs.photosList.innerHTML = '';
//   }
// }