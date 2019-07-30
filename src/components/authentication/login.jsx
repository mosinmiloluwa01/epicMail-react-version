/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptype from 'prop-types';
import * as yup from 'yup';
import InputField from '../reusables/inputField.jsx';
import fetchLogin from '../../actions/login';
import AuthLinks from '../reusables/AuthLinks.jsx';
import AuthFormContainer from '../reusables/AuthFormContainer.jsx';
import '../../css/login.css';
import camelSplit from '../../Utils/camelSplit';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(20),
});

class Login extends Component {
  state = {
    form: { email: '', password: '' },
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

    const {
      firstName, lastName, email, password,
    } = this.state.form;

    const obj = {
      firstName,
      lastName,
      email,
      password,
    };

    const validationError = await this.checkValidation();

    if (validationError) {
      this.props.fetchLogin(obj, this.props.history);
    }
  };

  render() {
    return (
      <AuthFormContainer title={ 'EPIC Mail Login' }>
        <form className="form form-login" onSubmit={this.onSubmit}>
        <div className="server-error-message">{this.props.LoginError.message}</div>
          {Object.keys(this.state.form).map((el, i) => (
            <InputField
              key={i}
              onFocus={e => this.clearFocus(e.target.name)}
              type={el === 'password' ? 'password' : 'text'}
              labelName={camelSplit(el)}
              className="form-input"
              divClassName="form-field1"
              placeholder={`Enter ${camelSplit(el)}`}
              name={el}
              value={this.state.form[el]}
              onChange={this.onChange}
              error={this.state.errors && this.state.errors[el]}
            />
          ))}
          <InputField type="submit" className="form-button" value="sign in" />
          <AuthLinks>
            <Link to="/signup">Create An Account</Link>
          </AuthLinks>
        </form>
      </AuthFormContainer>
    );
  }
}
Login.propTypes = {
  fetchLogin: Proptype.func.isRequired,
  history: Proptype.object,
  LoginError: Proptype.object,
};

const mapStateToProps = state => ({
  Login: state.login.body,
  LoginError: state.login.error,
});

export default connect(
  mapStateToProps,
  { fetchLogin },
)(withRouter(Login));
