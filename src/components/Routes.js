import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedLogin from './ProtectedLogin';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';
import Login from './Login';

const Routes = () => (
  <Switch>
    <ProtectedLogin path="/login" component={Login} />
    <ProtectedRoute path="/" component={Dashboard} />
  </Switch>
);
export default Routes;
