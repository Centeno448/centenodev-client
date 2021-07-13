import * as types from '../actions/actionTypes';

const initialState = {
  projects: [],
  error: null
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return { ...state, projects: action.projects, error: null };

    case types.LOAD_PROJECTS_FAIL:
      return { ...state, projects: [], error: action.error };

    default:
      return state;
  }
}
