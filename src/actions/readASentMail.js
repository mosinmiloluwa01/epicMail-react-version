import axios from 'axios';
import { READ_A_SENT_MAIL_SUCCESS, READ_A_SENT_MAIL_ERROR } from './types';

const getASentMail = (id, history) => async (dispatch) => {
  const token = localStorage.getItem('jwtAuth');
  await axios
    .get(`https://mosinmiloluwa-app.herokuapp.com/api/v2/messages/${id}/sent`, {
      headers: { Authorization: token },
    })
    .then((res) => {
      history.push('/sent-message');
      dispatch({
        type: READ_A_SENT_MAIL_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch(err => dispatch({
      type: READ_A_SENT_MAIL_ERROR,
      payload: err.response.data,
    }));
};

export default getASentMail;
