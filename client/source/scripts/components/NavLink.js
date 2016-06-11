// modules/NavLink.js
import React from 'react';
import { Link } from 'react-router';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-bootstrap-router/lib/LinkContainer';
import NavItemLink from 'react-bootstrap-router/ReactRouterBootstrap.NavItemLink';

export default React.createClass({
  render() {
    return <NavItemLink to ={...this.props}></ NavItemLink>
  }
})
