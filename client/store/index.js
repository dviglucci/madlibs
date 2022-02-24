import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from '../redux/user';
import poem2Reducer from '../redux/poem2';
import poem1Reducer from '../redux/poem1';


const reducer = combineReducers({
  user: userReducer,
  poem1: poem1Reducer,
  poem2: poem2Reducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
);

const store = createStore(reducer, middleware);

export default store;
