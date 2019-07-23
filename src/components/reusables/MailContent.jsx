import React from 'react';
import Proptype from 'prop-types';

const MailContent = ({ sender, message }) => (
  <div className="row">
    <div className="column1">
      <p className="sender-column">{sender}</p>
      <p className="message-column">{message}</p>
    </div>
  </div>
);

MailContent.propTypes = {
  sender: Proptype.string,
  message: Proptype.string,
};

export default MailContent;
