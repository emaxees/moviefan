/* eslint-disable no-console */
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];

export default [...middlewares];
