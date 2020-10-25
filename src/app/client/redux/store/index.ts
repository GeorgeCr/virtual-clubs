import { applyMiddleware, createStore } from 'redux';
import { testReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(testReducer, composeWithDevTools());

export default store;