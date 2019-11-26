import Api from 'core/api';
import { fetchMoviesSucces, startFetchMovies } from 'core/store/actions';

export const fetchMovie = (url) => async (dispatch) => {
    try {
        dispatch(startFetchMovies());
        const api = new Api();
        const data = await api.getMovies(url);
        dispatch(fetchMoviesSucces(data));
    } catch (error) {
    // TODO: Implement error handling
    }
};
