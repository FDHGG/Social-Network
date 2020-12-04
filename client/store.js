import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const combined = combineReducers({
  user: userReducer
});

export default createStore(combined,applyMiddleware(thunk));