import './js/api-service'
import './js/id'
import './js/pagination'
import MoviesApiService from './js/api-service';

const apiService = new MoviesApiService();
apiService.getPopularFilms();
apiService.getTrendFilmsgetTrendFilms();
apiService.getFilmsByName();
apiService.getFilteredMovies();