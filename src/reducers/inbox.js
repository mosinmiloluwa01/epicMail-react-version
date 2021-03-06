import { INBOX_SUCCESS, INBOX_ERROR } from '../actions/types';

const initialState = {
  body: [],
  error: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INBOX_SUCCESS:
      return {
        ...state,
        body: action.payload,
        isLoading: false,
      };
    case INBOX_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
