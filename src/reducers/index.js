import {combineReducers} from 'redux';
import {SET_CATEGORIES} from '../constants';
function categories(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  categories,
});
