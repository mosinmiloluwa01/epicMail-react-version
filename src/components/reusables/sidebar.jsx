/* eslint-disable no-script-url */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import { bindActionCreators } from 'redux';
import toggle from '../../actions/toggle';

const Sidebar = ({ toggleSidebar, setToggle }) => {
  const handleClick = () => {
    setToggle(!toggleSidebar);
  };
  return (
    <div className={toggleSidebar ? 'rsidebar open' : 'rsidebar'} id="responsive-sidebar">
      <Link to="#" className="rclosebtn" onClick={handleClick}>
        x
      </Link>
      <Link to="/compose" className="sidebarlink">
        <i className="fa fa-plus sidebaricons" />
        Compose
      </Link>
      <Link to="/inbox" className="sidebarlink">
        <i className="fa fa-inbox sidebaricons" />
        Inbox
      </Link>
      <Link to="/sent" className="sidebarlink">
        <i className="fa fa-paper-plane sidebaricons" />
        Sent
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  toggleSidebar: Proptype.bool,
  setToggle: Proptype.func,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setToggle: toggle,
  },
  dispatch,
);

const mapStateToProps = state => ({
  toggleSidebar: state.toggleSidebar.isToggled,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Sidebar));
