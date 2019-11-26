const initialState = {
    isFetching: false,
    movies: [],
};

const Movie = (state = initialState, action) => {
    switch (action.type) {
    case 'START_FETCH_MOVIES': {
        return {
            ...state,
            isFetching: true,
        };
    }
    case 'FETCH_MOVIES_SUCCESS': {
        const { data } = action.payload;
        return {
            ...state,
            movies: [...state.movies, ...data],
            isFetching: false,
        };
    }
    default:
        return state;
    }
};

Movie.initialState = initialState;

export default Movie;
