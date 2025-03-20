import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo-img.png";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function Navbars() {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "#06bbcc" }}>
          <img src={logo} />
          AlwaysSource
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/how-it-works">
              How It Works
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
          </Nav>
          {/* Right Most Button */}
          <Button className=" nav-btn">Download App</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
