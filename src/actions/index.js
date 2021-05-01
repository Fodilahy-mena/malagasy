import {GET_CATEGORIES, SET_CATEGORIES} from '../constants';
import dataCategories from '../data/categories.json';
export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}

export function getCategories() {
  return {
    type: GET_CATEGORIES,
    payload: dataCategories.categories,
  };
}
