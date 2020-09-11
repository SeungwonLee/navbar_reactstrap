import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from './components/Header'
import Body from './components/Body'

class Tab extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink><Link to={'/'}>Main</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink active><Link to={'/works'}>Works</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>
          <Switch>
            <Route exact path='/' component={Header} />
            <Route exact path='/works' component={Body} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Tab;
