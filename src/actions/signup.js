import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_ERROR, GET_CURRENT_USER } from './types';

const getCurrentUser = user => ({
  type: GET_CURRENT_USER,
  payload: user,
});

const fetchSignup = (user, history, resetIsLoadingState) => (dispatch) => {
  resetIsLoadingState();
  axios
    .post('https://mosinmiloluwa-app.herokuapp.com/api/v2/auth/signup', user)
    .then((res) => {
      localStorage.setItem('jwtAuth', res.data.token);
      history.push('/inbox');
      dispatch(getCurrentUser(res.data));
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
      resetIsLoadingState();
    })
    .catch((err) => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: err.response.data,
      });
      resetIsLoadingState();
    });
};

export default fetchSignup;
