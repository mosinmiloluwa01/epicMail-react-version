import { combineReducers } from 'redux';
import signup from './signup';
import login from './login';
import inbox from './inbox';
import compose from './compose';

export default combineReducers({
  signup,
  login,
  inbox,
  compose,
});
