import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Signup from './authentication/signup.jsx';
import Login from './authentication/login.jsx';
import Inbox from './pages/inbox.jsx';
import NotFound from './pages/NotFound.jsx';
import ComposeMail from './pages/compose.jsx';
import Message from './pages/message.jsx';
import SentMails from './pages/sentMails.jsx';
import SentMail from './pages/sentMessage.jsx';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/compose" component={ComposeMail} />
        <Route path="/message" component={Message} />
        <Route path="/sent" component={SentMails} />
        <Route path="/sent-message" component={SentMail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
