import React from 'react';
import Proptype from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggle from '../../actions/toggle';

const MailContainer = ({
  title, children, toggleSidebar, setToggle,
}) => {
  const onClick = () => {
    setToggle(!toggleSidebar);
  };
  return (
    <div className="content">
      <div className="content-inner">
        <button className="ropenbtn" onClick={onClick}>
          ☰
        </button>
        <h1 className="mail-header">{title}</h1>
        {children}
      </div>
    </div>
  );
};

MailContainer.propTypes = {
  title: Proptype.string,
  children: Proptype.node,
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
)(withRouter(MailContainer));
