import axios from 'axios';
import { SENT_MAILS_SUCCESS, SENT_MAILS_ERROR } from './types';

const getSentMails = () => async (dispatch) => {
  const token = localStorage.getItem('jwtAuth');
  await axios
    .get('https://mosinmiloluwa-app.herokuapp.com/api/v2/messages/sent', {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: SENT_MAILS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch(err => dispatch({
      type: SENT_MAILS_ERROR,
      payload: err.response.data,
    }));
};

export default getSentMails;
