import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import inbox from './inbox';

export default combineReducers({
  signup,
  login,
  inbox,
});
