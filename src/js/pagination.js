import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

// const URL_TRENDING_FILMS = 'https://api.themoviedb.org/3/trending/all/day?api_key=74cf07cbcff58397c32fe332f07646fa';
const options = {
  totalItems: 1000,
  itemsPerPage: 10,
  visiblePages: 8,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

const pagination = new Pagination('pagination', options);

pagination.reset();


const filmsApi = new MoviesApiService();
