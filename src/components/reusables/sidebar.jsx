/* eslint-disable no-script-url */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    state = { }

    render() {
      return (
              <div className='rsidebar' id='responsive-sidebar'>
                <Link to='javascript:void(0)' className='rclosebtn' onClick='closeNav()'>x</Link>
                <Link to='/compose' className='sidebarlink'><i className='fa fa-plus sidebaricons'></i>Compose</Link>
                <Link to='/compose' className='sidebarlink active'><i className='fa fa-inbox sidebaricons'></i>Inbox</Link>
                <Link to='/compose' className='sidebarlink'><i className='fa fa-paper-plane sidebaricons'></i>Sent</Link>
                <Link to='/compose' className='sidebarlink'><i className='fa fa-pencil-alt sidebaricons'></i>Draft</Link>
                <Link to='/compose' className='sidebarlink'><i className='fa fa-users sidebaricons'></i>Groups</Link>
              </div>
      );
    }
}

export default HeaderComponent;
