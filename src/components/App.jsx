/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Signup from './authentication/signup.jsx';
import Login from './authentication/login.jsx';
import Inbox from './pages/inbox.jsx';
import NotFound from './pages/NotFound.jsx';

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
      <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/inbox" component={Inbox} />
        <Route component={NotFound} />
      </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
