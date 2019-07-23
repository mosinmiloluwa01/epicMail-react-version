import axios from 'axios';
import { INBOX_SUCCESS, INBOX_ERROR } from './types';

const getInbox = () => async (dispatch) => {
  const token = localStorage.getItem('jwtAuth');
  await axios
    .get('https://mosinmiloluwa-app.herokuapp.com/api/v2/messages', {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch({
        type: INBOX_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch(err => dispatch({
      type: INBOX_ERROR,
      payload: err.response.data,
    }));
};

export default getInbox;
