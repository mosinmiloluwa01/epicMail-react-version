import { COMPOSE_SUCCESS, COMPOSE_ERROR } from '../actions/types';

const initialState = {
  body: {},
  error: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMPOSE_SUCCESS:
      return {
        ...state,
        body: action.payload,
        isLoading: false,
      };
    case COMPOSE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
