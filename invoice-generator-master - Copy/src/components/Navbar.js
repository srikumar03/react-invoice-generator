import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";

function NavBar() {
  return (
    <div className="fixed-top">
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="mx-background-top-linear"
      >
        <Navbar.Brand className="brand">Gtech Automotives</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="nav-right">
            <Nav.Item>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                SLD
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/camera"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Camera Installation
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/ReverseSensor"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Reverse Sensor
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
