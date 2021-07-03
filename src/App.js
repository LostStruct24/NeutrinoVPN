import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';
import { Helmet } from 'react-helmet';


function App () {
  <Helmet>
    <title>NeutrinoVPN</title>
  </Helmet> 

  return (
    <Router>
      <Switch>
        <Route path="/NeutrinoVPN" component={Home} exact />
        <Route path="/NeutrinoVPN/login" component={LoginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
