import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import inbox from './inbox';
import compose from './compose';
import readAMail from './readAMail';
import toggleSidebar from './toggleSidebar';
import sentMails from './sentMails';
import readASentMail from './readASentMail';

export default combineReducers({
  signup,
  login,
  inbox,
  compose,
  readAMail,
  toggleSidebar,
  sentMails,
  readASentMail,
});
