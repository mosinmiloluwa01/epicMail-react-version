import { SENT_MAILS_SUCCESS, SENT_MAILS_ERROR } from '../actions/types';

const initialState = {
  body: [],
  error: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SENT_MAILS_SUCCESS:
      return {
        ...state,
        body: action.payload,
        isLoading: false,
      };
    case SENT_MAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
