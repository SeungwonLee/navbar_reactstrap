import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink as RRNavLink } from 'react-router-dom';
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
              <NavLink exact to={"/"} tag={RRNavLink} activeClassName="active"><Link to={'/'}>Main</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/works"} tag={RRNavLink} activeClassName="active"><Link to={'/works'}>Works</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/foo"}>Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled to={"/less"}>Disabled Link</NavLink>
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
