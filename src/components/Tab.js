import React, { Component } from 'react';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Tab extends Component {
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink exact to={"/"} tag={RRNavLink} activeClassName="active"><Link to={'/'}>Main</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/works"} tag={RRNavLink} activeClassName="active"><Link to={'/works'}>Work Experience</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/fun"} tag={RRNavLink} activeClassName="active"><Link to={'/fun'}>Fun</Link></NavLink>
          </NavItem>
        </Nav>

      </div>
    );
  }
}

export default Tab;
