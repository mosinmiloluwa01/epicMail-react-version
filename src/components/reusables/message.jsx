import React, { Fragment } from 'react';
import Proptype from 'prop-types';

const Message = ({ date, email, message }) => (
  <Fragment>
    <div className="row">
      <div className="full-col">
        <p className="float-right">{date}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-75">
        <p className="from-color font-style"> {email}</p>
      </div>
    </div>
    <div className="mailcontent-inner">
      <div className="row">
        <p>{message}</p>
      </div>
    </div>
  </Fragment>
);

Message.propTypes = {
  date: Proptype.string,
  email: Proptype.string,
  message: Proptype.string,
};
export default Message;
