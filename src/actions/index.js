import {SET_CATEGORIES} from '../constants';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}
