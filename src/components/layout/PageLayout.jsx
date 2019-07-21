import React, { Fragment } from 'react';
import Header from '../reusables/header.jsx';
import Sidebar from '../reusables/sidebar.jsx';

const PageLayout = () => (
    <Fragment>
      <div className="container">
        <Header />
        <Sidebar />
      </div>
    </Fragment>
);

export default PageLayout;
