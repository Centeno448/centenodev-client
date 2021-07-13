import * as types from '../actions/actionTypes';

const initialState = {
  attachments: [],
  error: null
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ATTACHMENTS_SUCCESS:
      return { ...state, attachments: action.attachments, error: null };

    case types.LOAD_ATTACHMENTS_FAIL:
      return { ...state, attachments: [], error: action.error };

    default:
      return state;
  }
}
