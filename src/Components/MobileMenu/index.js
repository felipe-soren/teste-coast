import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";

import { Context } from "../../Context/AuthContext";

import { Container } from "./styles";

function MobileMenu() {
  const { handleLogout } = useContext(Context);

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Dashboard</Nav.Link>
            <Nav.Link href="/create-ar">Create AR</Nav.Link>
            <Nav.Link href="/uploaded-ar">Uploaded AR</Nav.Link>
            <Nav.Link href="/account">Settings</Nav.Link>
            <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default MobileMenu;
