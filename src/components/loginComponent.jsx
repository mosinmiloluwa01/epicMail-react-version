/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

class Login extends Component {
    state = {
      email: '',
      password: '',
    }

    render() {
      return (
            <div>
        <div className="container">
          <h1>EPIC Mail Login</h1>
          <div className="invalid" id="error" />
          <div className="login-item1">
            <form className="form form-login" name="LoginForm">
            <div><p>Email</p></div>
            <div className='form-field1'>
                <input type="text" name="email" className="form-input" placeholder="Please type your prefered email here"/>
              </div>
            <div><p className="error"></p></div>

            <div><p>Password</p></div>
            <div className='form-field1'>
                <input type="text" name="password" className="form-input" placeholder="Please type your prefered password here"/>
              </div>
            <div><p className="error"></p></div>

              <div className='form-field2'>
                <input type="submit" value="Sign Up"/>
              </div>

              <div className='form-field'>
              <Link to="/signup" className="margin-left">Create An Account</Link>
              <Link to="recoverpassword.html" className="margin-left">Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    }
}

export default Login;
