import React, { Fragment } from 'react';
import Proptype from 'prop-types';
import '../../css/style.css';

const AuthLinks = props => (
  <Fragment>
    <div className='link-group'>{props.children}</div>
  </Fragment>
);

AuthLinks.propTypes = {
  children: Proptype.object,
};

export default AuthLinks;
