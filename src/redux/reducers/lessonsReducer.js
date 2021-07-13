import * as types from '../actions/actionTypes';

const initialState = {
  lessons: [],
  error: null
};

export default function lessonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LESSONS_SUCCESS:
      return { ...state, lessons: action.lessons, error: null };

    case types.LOAD_LESSONS_FAIL:
      return { ...state, lessons: [], error: action.error };

    default:
      return state;
  }
}
