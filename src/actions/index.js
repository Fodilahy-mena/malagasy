import {
  GET_CATEGORIES,
  SET_CATEGORIES,
  GET_PHRASES,
  SET_PHRASES,
  SET_RANDOM_PHRASE,
  GET_RANDOM_PHRASE,
} from '../constants';

import categoriesData from '../data/categories.json';
import phrasesData from '../data/phrases.json';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}

export function getCategories() {
  return {
    type: GET_CATEGORIES,
    payload: categoriesData.categories,
  };
}

export function setPhrases(phrases) {
  return {
    type: SET_PHRASES,
    payload: phrases,
  };
}

export function getPhrases() {
  return {
    type: GET_PHRASES,
    payload: phrasesData.phrases,
  };
}

export function setRandomPhrase(phrase) {
  return {
    type: SET_RANDOM_PHRASE,
    payload: phrase,
  };
}

export function getRandomPhrase() {
  return {
    type: GET_RANDOM_PHRASE,
    payload: {},
  };
}
