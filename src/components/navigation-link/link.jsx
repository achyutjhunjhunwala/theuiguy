import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';

export const NavLink = ({ item, }) => (
  <li>
    <Link to={`/${item}`}>{item}</Link>
  </li>
);

NavLink.propTypes = {
  item: PropTypes.string,
};

export default NavLink;
