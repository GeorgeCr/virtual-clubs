import { applyMiddleware, createStore, compose } from 'redux';
import { testReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const thunkMiddleware = applyMiddleware(thunk);

const store = createStore(testReducer, compose(thunkMiddleware, composeWithDevTools()));

export default store;