import * as types from '../actions/actionTypes';

const initialState = {
  projects: [],
  error: null,
  loading: false
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECTS_START:
      return { ...state, loading: true };

    case types.LOAD_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects,
        error: null,
        loading: false
      };

    case types.LOAD_PROJECTS_FAIL:
      return { ...state, projects: [], error: action.error, loading: false };

    default:
      return state;
  }
}
