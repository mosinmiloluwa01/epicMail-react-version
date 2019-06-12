/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import '../css/login.css';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>EPIC Mail Sign Up</h1>
          <div className="invalid" id="error" />
          <div className="login-item1">
            <form className="form form-login" id="signup">
              <div><p>First Name</p></div>
              <div className='form-field1'>
                <input type="text" name="firstName" className="form-input" placeholder="Please type your first name here"/>
              </div>
            <div><p className="error"></p></div>

            <div><p>Last Name</p></div>
            <div className='form-field1'>
                <input type="text" name="lasttName" className="form-input" placeholder="Please type your last name here"/>
            </div>
            <div><p className="error"></p></div>

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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
