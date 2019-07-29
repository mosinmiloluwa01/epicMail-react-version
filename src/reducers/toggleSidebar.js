import { TOGGLE_SIDEBAR } from '../actions/types';

const initialState = {
  isToggled: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isToggled: action.payload,
      };
    default:
      return state;
  }
}
