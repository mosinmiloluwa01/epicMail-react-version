import axios from 'axios';
import { COMPOSE_SUCCESS, COMPOSE_ERROR } from './types';

const composeMail = (user, history) => (dispatch) => {
  const token = localStorage.getItem('jwtAuth');
  axios
    .post('https://mosinmiloluwa-app.herokuapp.com/api/v2/messages', user, {
      headers: { Authorization: token },
    })
    .then((res) => {
      history.push('/inbox');
      dispatch({
        type: COMPOSE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => dispatch({
      type: COMPOSE_ERROR,
      payload: err.response.data,
    }));
};

export default composeMail;
