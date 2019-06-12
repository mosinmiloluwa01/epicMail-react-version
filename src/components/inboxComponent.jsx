/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import HeaderComponent from './headerComponent.jsx';
import SidebarComponent from './sidebarComponent.jsx';

import '../css/style.css';

class InboxComponent extends Component {
    state = { }

    render() {
      return (
          <React.Fragment>
            <div className='container'>
              <HeaderComponent />
              <SidebarComponent />
            </div>
          </React.Fragment>
      );
    }
}

export default InboxComponent;
