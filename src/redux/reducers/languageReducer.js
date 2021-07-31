import * as types from '../actions/actionTypes';

const initialState = {
  language: 'EN'
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_LANGUAGE:
      return { ...state, language: action.language };

    default:
      return state;
  }
}
