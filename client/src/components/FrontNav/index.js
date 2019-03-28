import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import "./frontNav.scss";
import Logo from '../../../src/logo.svg';

class FrontNav extends Component {
  render() {
    return (
      <Navbar className="navbarStyle" expand="lg">
        <Navbar.Brand className="navheader" href="#home">
          <img
            src={Logo}
            width="55"
            height="55"
            className="d-inline-block align-top"
            alt="Bee The Change Logo"
          />
          <span className="textheader">
            {' Bee The Change '}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="primary" className="btn-margin" onClick={this.props.login}>
              Log In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default FrontNav;
