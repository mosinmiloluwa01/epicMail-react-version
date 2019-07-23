import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_ERROR, GET_CURRENT_USER } from './types';

const getCurrentUser = user => ({
  type: GET_CURRENT_USER,
  payload: user,
});

const fetchLogin = (user, history) => (dispatch) => {
  axios
    .post('https://mosinmiloluwa-app.herokuapp.com/api/v2/auth/login', user)
    .then((res) => {
      localStorage.setItem('jwtAuth', res.data.data.token);
      history.push('/inbox');
      dispatch(getCurrentUser(res.data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => dispatch({
      type: LOGIN_ERROR,
      payload: err.response.data,
    }));
};

export default fetchLogin;
