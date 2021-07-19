import * as types from '../actions/actionTypes';

const initialState = {
  lessons: [],
  error: null,
  loading: false
};

export default function lessonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LESSONS_START:
      return { ...state, loading: true };

    case types.LOAD_LESSONS_SUCCESS:
      return { ...state, lessons: action.lessons, error: null, loading: false };

    case types.LOAD_LESSONS_FAIL:
      return { ...state, lessons: [], error: action.error, loading: false };

    default:
      return state;
  }
}
