import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import PageLayout from '../layout/PageLayout.jsx';
import getInbox from '../../actions/inbox';
import MailContainer from '../reusables/MailContainer.jsx';
import MailContent from '../reusables/MailContent.jsx';

import '../../css/style.css';

class Inbox extends Component {
  componentDidMount() {
    this.props.getInbox();
  }

  render() {
    const { inbox } = this.props;
    return (
      <Fragment>
        <PageLayout>
          <MailContainer title={'Inbox'}>
            {inbox.map(mail => (
              <MailContent
              key={mail.id}
              sender={`${mail.first_name}  ${mail.last_name}`}
              message={mail.message}
              />
            ))}
          </MailContainer>
        </PageLayout>
      </Fragment>
    );
  }
}

Inbox.propTypes = {
  getInbox: Proptype.func,
  inbox: Proptype.array,
};

const mapStateToProps = state => ({
  inbox: state.inbox.body,
});

export default connect(
  mapStateToProps,
  { getInbox },
)(withRouter(Inbox));
