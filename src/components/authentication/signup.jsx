/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Proptype from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as yup from 'yup';
import fetchSignup from '../../actions/signup';
import InputField from '../reusables/inputField.jsx';
import AuthLinks from '../reusables/AuthLinks.jsx';
import AuthFormContainer from '../reusables/AuthFormContainer.jsx';
import '../../css/login.css';
import camelSplit from '../../Utils/camelSplit';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
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
class Signup extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    isLoading: false,
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
      this.props.fetchSignup(obj, this.props.history, this.resetIsLoadingState);
    }
  };

  resetIsLoadingState = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  }

  render() {
    localStorage.clear();
    return (
      <AuthFormContainer title={ 'EPIC Mail SignUp' }>
              <form className="form form-login" onSubmit={this.onSubmit}>
              <div className="server-error-message">{this.props.signupError.message}</div>
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
                <InputField type="submit" className="form-button" value={this.state.isLoading === true ? 'Loading...' : 'sign up' } />
                <AuthLinks>
                  <Link to="/">back to login</Link>
                </AuthLinks>
              </form>
              </AuthFormContainer>
    );
  }
}

Signup.propTypes = {
  fetchSignup: Proptype.func.isRequired,
  history: Proptype.object,
  signupError: Proptype.object,
};

const mapStateToProps = state => ({
  signup: state.signup.body,
  signupError: state.signup.error,
});

export default connect(
  mapStateToProps,
  { fetchSignup },
)(withRouter(Signup));
