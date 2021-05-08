import {combineReducers} from 'redux';
// import all of constat case name for the swich
// in reducers
import {
  GET_CATEGORIES,
  SET_CATEGORIES,
  GET_PHRASES,
  SET_PHRASES,
  SET_RANDOM_PHRASE,
  GET_RANDOM_PHRASE,
  SET_LANGUAGE_NAME,
  GET_LANGUAGE_NAME,
} from '../constants';
// categories reducer
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

// phrases reducer
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

// random phrase reducer
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

function nativeLanguage(state = '', action) {
  switch (action.type) {
    case GET_LANGUAGE_NAME:
      return action.payload;
    case SET_LANGUAGE_NAME:
      return action.payload;
    default:
      return state;
  }
}

// combine all of the reducers together
export default combineReducers({
  categories,
  phrases,
  randomPhrase,
  nativeLanguage,
});
