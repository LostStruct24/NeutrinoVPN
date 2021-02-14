import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <Helmet>
        <title>NeutrinoVPN</title>
      </Helmet> 
      <Switch>
        <Route path="/NeutrinoVPN" component={Home} exact />
        <Route path="/NeutrinoVPN/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
