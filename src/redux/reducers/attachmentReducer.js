import * as types from '../actions/actionTypes';

const initialState = {
  attachments: [],
  error: null,
  loading: false
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ATTACHMENTS_START:
      return { ...state, loading: true };

    case types.LOAD_ATTACHMENTS_SUCCESS:
      return {
        ...state,
        attachments: action.attachments,
        error: null,
        loading: false
      };

    case types.LOAD_ATTACHMENTS_FAIL:
      return { ...state, attachments: [], error: action.error, loading: false };

    default:
      return state;
  }
}
