import React from 'react';
import Proptype from 'prop-types';

const MailContent = ({
  sender, message, id, onClick,
}) => (
  <div className="row" id={id} onClick={onClick}>
    <div className="column1" >
      <p className="sender-column">{sender}</p>
      <p className="message-column">{message}</p>
    </div>
  </div>
);

MailContent.propTypes = {
  sender: Proptype.string,
  message: Proptype.string,
  id: Proptype.number,
  onClick: Proptype.func,
};

export default MailContent;
