import * as types from './actionTypes';

export function setLanguage(language) {
  return { type: types.SET_LANGUAGE, language };
}
