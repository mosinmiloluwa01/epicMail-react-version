import { TOGGLE_SIDEBAR } from './types';

const toggleSidebar = toggle => dispatch => dispatch({
  type: TOGGLE_SIDEBAR,
  payload: toggle,
});

export default toggleSidebar;
