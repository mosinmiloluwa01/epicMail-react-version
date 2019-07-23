import React from 'react';
import Proptype from 'prop-types';

const MailContainer = ({ title, children }) => (
  <div className="content">
    <div className="content-inner">
      <button className="ropenbtn">☰</button>
      <h1 className="mail-header">{title}</h1>
      {children}
    </div>
  </div>
);

MailContainer.propTypes = {
  title: Proptype.string,
  children: Proptype.node,
};

export default MailContainer;
