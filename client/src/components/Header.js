import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Movies App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Add movie</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
