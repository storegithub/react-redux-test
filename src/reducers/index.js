import { combineReducers } from 'redux';
import postReducer from './postReducer';
//https://jsonplaceholder.typicode.com/
export default combineReducers({
    posts: postReducer
});