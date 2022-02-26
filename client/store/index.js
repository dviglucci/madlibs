import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import userReducer from '../redux/user';
import poem1Reducer from '../redux/poem1';
import poem2Reducer from '../redux/poem2';
import poem3Reducer from '../redux/poem3';
import finalPoemReducer from '../redux/finalPoem';


const reducer = combineReducers({
  user: userReducer,
  poem1: poem1Reducer,
  poem2: poem2Reducer,
  poem3: poem3Reducer,
  finalPoem: finalPoemReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
);

const store = createStore(reducer, middleware);

export default store;
