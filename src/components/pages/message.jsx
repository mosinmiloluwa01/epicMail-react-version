import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import getMail from '../../actions/readAMail';
import MailContainer from '../reusables/MailContainer.jsx';
import Email from '../reusables/message.jsx';
import PageLayout from '../layout/PageLayout.jsx';

class Message extends Component {
  render() {
    const { readAMail } = this.props;

    const date = new Date(readAMail.created_on).toUTCString();
    return (
      <PageLayout>
        <MailContainer title={readAMail.subject}>
          <Email date={date} email={readAMail.email} message={readAMail.message} />
        </MailContainer>
      </PageLayout>
    );
  }
}

Message.propTypes = {
  readAMail: Proptype.object,
};

const mapStateToProps = state => ({
  readAMail: state.readAMail.body,
});

export default connect(
  mapStateToProps,
  { getMail },
)(withRouter(Message));
