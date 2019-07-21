import React from 'react';
import Proptype from 'prop-types';
import '../../css/login.css';

const AuthFormContainer = ({ title, children }) => (
    <div className="auth-container">
      <div className="container">
        <h1 className="h1-header">{title}</h1>
        <div className="invalid" id="error" />
        <div className="form-container">
          <div className="login-item1">{children}</div>
        </div>
      </div>
    </div>
);

AuthFormContainer.propTypes = {
  title: Proptype.string,
  children: Proptype.object,
};

export default AuthFormContainer;
