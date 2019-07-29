import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import inbox from './inbox';
import compose from './compose';
import readAMail from './readAMail';
import toggleSidebar from './toggleSidebar';

export default combineReducers({
  signup,
  login,
  inbox,
  compose,
  readAMail,
  toggleSidebar,
});
