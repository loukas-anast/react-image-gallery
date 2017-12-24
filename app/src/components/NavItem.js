import React from 'react';
import { NavLink } from 'react-router-dom';

//Nav item component as function
const NavItem = ({url, name}) => (
  <li><NavLink to={url}>{name}</NavLink></li>
);

export default NavItem;
