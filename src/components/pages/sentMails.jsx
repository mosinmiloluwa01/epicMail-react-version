import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import PageLayout from '../layout/PageLayout.jsx';
import getSentMails from '../../actions/sentMails';
import readASentMail from '../../actions/readASentMail';
import MailContainer from '../reusables/MailContainer.jsx';
import MailContent from '../reusables/MailContent.jsx';

import '../../css/style.css';

class SentMails extends Component {
  state = {
    isToggled: false,
  };

  componentDidMount() {
    this.props.getSentMails();
  }

  onclick = (id) => {
    this.props.readASentMail(id, this.props.history);
  };

  render() {
    const { sentMails } = this.props;
    return (
      <Fragment>
        <PageLayout>
          <MailContainer title={'Sent Mails'}>
            {sentMails.map(mail => (
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

SentMails.propTypes = {
  getSentMails: Proptype.func,
  sentMails: Proptype.array,
  readASentMail: Proptype.func,
  history: Proptype.object,
};

const mapStateToProps = state => ({
  sentMails: state.sentMails.body,
  readASentMail: state.readASentMail.body,
});

export default connect(
  mapStateToProps,
  { getSentMails, readASentMail },
)(withRouter(SentMails));
