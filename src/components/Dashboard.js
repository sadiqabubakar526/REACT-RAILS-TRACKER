/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom';
import Records from './Records';
import Chart from './Chart';
import AddRecord from './AddRecord';
import { logout } from '../actions';
import Home from './Home';
import NotFound from './NotFound';

const Dashboard = ({ logout }) => {
  // const Auth = React.useContext(AuthApi);

  function onLogout() {
    Cookies.remove('user');
    logout();
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddRecord} />
        <Route path="/records" component={Records} />
        <Route path="/chart" component={Chart} />
        <Route component={NotFound} />
      </Switch>
      <nav>
        <NavLink exact to="/" className="nav-item">
          <i className="fas fa-home" />
          <p>Home</p>
        </NavLink>
        <NavLink exact to="/add" className="nav-item">
          <i className="fas fa-plus-circle" />
          {' '}
          <p>Add</p>
        </NavLink>
        <NavLink exact to="/records" className="nav-item">
          <i className="fas fa-database" />
          {' '}
          <p>Records</p>
        </NavLink>
        <NavLink exact to="/chart" className="nav-item">
          <i className="far fa-chart-bar" />
          {' '}
          <p>Chart</p>
        </NavLink>
        <div className="nav-item" onClick={onLogout}>
          <i className="fas fa-sign-out-alt" />
          {' '}
          <p>Logout</p>
        </div>
      </nav>
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = () => ({
  logout,
});

export default connect(null, mapDispatchToProps())(Dashboard);
