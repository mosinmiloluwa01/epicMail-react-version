/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './signupComponent.jsx';
import Login from './loginComponent.jsx';
import Inbox from './inboxComponent.jsx';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/inbox" component={Inbox} />
      </Router>
    );
  }
}

export default App;
