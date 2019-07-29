/* eslint-disable class-methods-use-this */
import React, { Fragment, Component } from 'react';
import Proptype from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup';
import PageLayout from '../layout/PageLayout.jsx';
import InputField from '../reusables/composeInput.jsx';
import MailContainer from '../reusables/MailContainer.jsx';
import composeMail from '../../actions/compose';
import '../../css/style.css';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

class ComposeMail extends Component {
  state = {
    form: { email: '', subject: '', message: '' },
  };

  onChange = (event) => {
    this.setState({ form: { ...this.state.form, [event.target.name]: event.target.value } });
  };

  checkValidation = async () => {
    let formIsValid = false;

    try {
      await schema.validate(this.state.form, { abortEarly: false });
      formIsValid = true;
    } catch (err) {
      const errors = err.inner.reduce((accumulator, error) => {
        accumulator[error.path] = error.message;
        return accumulator;
      }, {});
      formIsValid = false;
      this.setState({ errors: { ...errors } });
    }
    return formIsValid;
  };

  clearFocus = (name) => {
    const previousErrors = { ...this.state.errors };
    delete previousErrors[name];
    this.setState({ errors: previousErrors });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const validationError = await this.checkValidation();

    const { email, subject, message } = this.state.form;

    const obj = {
      email,
      subject,
      message,
      type: 'sent',
    };

    if (validationError) {
      this.props.composeMail(obj, this.props.history);
    }
  };

  render() {
    return (
      <Fragment>
        <PageLayout>
          <MailContainer title={'Compose An Email'}>
            <div className="server-error-message">{this.props.composeError.message}</div>
            <form className="col-75" onSubmit={this.onSubmit}>
              <InputField
                onFocus={e => this.clearFocus(e.target.name)}
                type="text"
                placeholder="To:"
                name="email"
                value={this.state.form.email}
                onChange={this.onChange}
                error={this.state.errors && this.state.errors.email}
              />
              <InputField
                onFocus={e => this.clearFocus(e.target.name)}
                type="text"
                placeholder="Subject:"
                name="subject"
                value={this.state.form.subject}
                onChange={this.onChange}
                error={this.state.errors && this.state.errors.subject}
              />
              <textarea
                name="message"
                placeholder="Compose mail here"
                className="txtarea"
                value={this.state.form.message}
                onChange={this.onChange}
                error={this.state.errors && this.state.errors.message}
              />
              <InputField
                onFocus={e => this.clearFocus(e.target.name)}
                type="submit"
                value="submit"
              />
            </form>
          </MailContainer>
        </PageLayout>
      </Fragment>
    );
  }
}

ComposeMail.propTypes = {
  composeMail: Proptype.func.isRequired,
  history: Proptype.object,
  composeError: Proptype.object,
};

const mapStateToProps = state => ({
  compose: state.compose.body,
  composeError: state.compose.error,
});

export default connect(
  mapStateToProps,
  { composeMail },
)(withRouter(ComposeMail));
