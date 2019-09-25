import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import PageLayout from '../layout/PageLayout.jsx';
import getInbox from '../../actions/inbox';
import readAMail from '../../actions/readAMail';
import MailContainer from '../reusables/MailContainer.jsx';
import MailContent from '../reusables/MailContent.jsx';

import '../../css/style.css';

class Inbox extends Component {
  state = {
    isToggled: false,
  };

  componentDidMount() {
    this.props.getInbox();
  }

  onclick = (id) => {
    this.props.readAMail(id, this.props.history);
  };

  render() {
    const { inbox, history } = this.props;
    if (!localStorage.getItem('jwtAuth')) {
      history.push('/');
    }
    return (
      <Fragment>
        <PageLayout>
          <MailContainer title={'Inbox'}>
            {inbox.map(mail => (
              <MailContent
                key={mail.id}
                id={mail.id}
                sender={`${mail.first_name}  ${mail.last_name}`}
                message={mail.message}
                onClick={() => this.onclick(mail.id)}
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
  readAMail: Proptype.func,
  history: Proptype.object,
};

const mapStateToProps = state => ({
  inbox: state.inbox.body,
  readAMail: state.readAMail.body,
});

export default connect(
  mapStateToProps,
  { getInbox, readAMail },
)(withRouter(Inbox));
