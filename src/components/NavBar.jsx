import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

import "../styles/NavBar.css";

export const NavBar = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="navCont">
      <Container>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <NavDropdown
              title="Головна"
              className="navBarItem"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Меблевий поролон"
              className="navBarItem"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Технічний поролон"
              className="navBarItem"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="navBarItem">
              <span className="navBarItemText">Про поролон</span>
            </Nav.Item>
            <Nav.Item className="navBarItem">
              <span className="navBarItemText">Про компанію</span>
            </Nav.Item>
            <Nav.Item className="navBarItem">
              <span className="navBarItemText">Оплата і доставка</span>
            </Nav.Item>
            <Nav.Item
              className="navBarItem"
              style={{ borderRight: "1px solid black" }}
            >
              <span className="navBarItemText">Контакти</span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
