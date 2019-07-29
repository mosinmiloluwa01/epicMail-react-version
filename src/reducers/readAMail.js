import { READ_A_MAIL_SUCCESS, READ_A_MAIL_ERROR } from '../actions/types';

const initialState = {
  body: {},
  error: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case READ_A_MAIL_SUCCESS:
      return {
        ...state,
        body: action.payload,
        isLoading: false,
      };
    case READ_A_MAIL_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
