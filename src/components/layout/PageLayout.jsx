import React, { Fragment } from 'react';
import Proptype from 'prop-types';
import Header from '../reusables/header.jsx';
import Sidebar from '../reusables/sidebar.jsx';

const PageLayout = props => (
  <Fragment>
    <div className="pageContainer">
      <Header />
      <div className="page-content">
        <Sidebar />
        {props.children}
      </div>
    </div>
  </Fragment>
);

PageLayout.propTypes = {
  children: Proptype.node,
};

export default PageLayout;
