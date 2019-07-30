import axios from 'axios';
import { READ_A_MAIL_SUCCESS, READ_A_MAIL_ERROR } from './types';

const getAMail = (id, history) => async (dispatch) => {
  const token = localStorage.getItem('jwtAuth');
  await axios
    .get(`https://mosinmiloluwa-app.herokuapp.com/api/v2/messages/${id}`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      history.push('/message');
      dispatch({
        type: READ_A_MAIL_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch(err => dispatch({
      type: READ_A_MAIL_ERROR,
      payload: err.response,
    }));
};

export default getAMail;
