/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import PageLayout from '../layout/PageLayout.jsx';

import '../../css/style.css';

class InboxComponent extends Component {
    state = { }

    render() {
      return (
          <Fragment>
            <PageLayout/>
          </Fragment>
      );
    }
}

export default InboxComponent;
