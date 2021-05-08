import {combineReducers} from 'redux';
import {
  GET_CATEGORIES,
  SET_CATEGORIES,
  GET_PHRASES,
  SET_PHRASES,
  SET_RANDOM_PHRASE,
  GET_RANDOM_PHRASE,
} from '../constants';
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

function phrases(state = [], action) {
  switch (action.type) {
    case SET_PHRASES:
      return [...state, action.payload];
    case GET_PHRASES:
      return action.payload;
    default:
      return state;
  }
}

function randomPhrase(state = {}, action) {
  switch (action.type) {
    case SET_RANDOM_PHRASE:
      return action.payload;
    case GET_RANDOM_PHRASE:
      return action.payload;
    default:
      return state;
  }
}
export default combineReducers({
  categories,
  phrases,
  randomPhrase,
});
