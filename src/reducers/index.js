import {combineReducers} from 'redux';
import {GET_CATEGORIES, SET_CATEGORIES} from '../constants';
function categories(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return [...state, action.payload];
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
});
