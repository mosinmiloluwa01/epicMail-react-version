import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import getMail from '../../actions/readASentMail';
import MailContainer from '../reusables/MailContainer.jsx';
import Email from '../reusables/message.jsx';
import PageLayout from '../layout/PageLayout.jsx';

class SentMessage extends Component {
  render() {
    const { readASentMail, history } = this.props;

    if (!localStorage.getItem('jwtAuth')) {
      history.push('/');
    }

    const date = new Date(readASentMail.created_on).toUTCString();
    return (
      <PageLayout>
        <MailContainer title={readASentMail.subject}>
          <Email date={date} email={readASentMail.email} message={readASentMail.message} />
        </MailContainer>
      </PageLayout>
    );
  }
}

SentMessage.propTypes = {
  readASentMail: Proptype.object,
  history: Proptype.object,
};

const mapStateToProps = state => ({
  readASentMail: state.readASentMail.body,
});

export default connect(
  mapStateToProps,
  { getMail },
)(withRouter(SentMessage));
