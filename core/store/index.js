/* eslint-disable no-console */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Movie } from 'reducers';
import middlewares from 'core/store/middlewares';

const combinedReducers = combineReducers({
    movies: Movie,
});

const makeStore = (initialState) => createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

export default makeStore;
