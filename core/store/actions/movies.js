export const startFetchMovies = () => ({ type: 'START_FETCH_MOVIES' });
export const fetchMoviesSucces = (data) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: { data },
});
