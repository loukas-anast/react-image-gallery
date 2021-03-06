import React from 'react';
import NavItem from './NavItem';

// Navigation component as function
const Navigation = (props) => (
  <nav className="main-nav">
    <ul>
      <NavItem url="/search" name="search"/>
      <NavItem url="/cats" name="cats"/>
      <NavItem url="/dogs" name="dogs"/>
      <NavItem url="/computers" name="computers" />
    </ul>
  </nav>
);

export default Navigation;
