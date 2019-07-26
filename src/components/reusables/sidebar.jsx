/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className="rsidebar" id="responsive-sidebar">
      <Link to="javascript:void(0)" className="rclosebtn">
        x
      </Link>
      <Link to="/compose" className="sidebarlink">
        <i className="fa fa-plus sidebaricons" />Compose
      </Link>
      <Link to="/inbox" className="sidebarlink active">
        <i className="fa fa-inbox sidebaricons" />Inbox
      </Link>
      <Link to="/sent" className="sidebarlink">
        <i className="fa fa-paper-plane sidebaricons" />Sent
      </Link>
    </div>
);

export default Sidebar;
