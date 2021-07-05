import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Login  from '../modules/Login/Login';
import Dashboard from '../modules/Dashboard/Dashboard';

function Routers() {
  return (
  <Router>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
  );
}

export default Routers;