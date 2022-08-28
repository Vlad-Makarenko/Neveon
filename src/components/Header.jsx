import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import location from "../assets/location.png";
import handset from "../assets/handset.png";
import "../styles/NavBar.css";

export const Header = ({ setModal }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logo} height="20" alt="Logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item className="navIco">
              <img className="" src={location} alt="location" />
            </Nav.Item>
            <Nav.Link
              className="navText"
              href="https://www.google.com/maps/place/Nezalezhnosti+Blvd,+10,+Brovary,+Kyivs'ka+oblast,+07400/@50.5158424,30.7971185,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4d96dd6562095:0x62d65785781a27bc!8m2!3d50.5158424!4d30.7993072"
              target="_blank"
            >
              <span style={{ fontSize: "13px" }}>м. Київ </span>
              <span style={{ fontSize: "13px" }}>
                вул. Незалежності, буд. 10
              </span>
            </Nav.Link>
            <Nav.Item className="navIco">
              <img className="" src={handset} alt="handset" />
            </Nav.Item>
            <Nav.Item className="navText">
              <span style={{ fontSize: "18px" }}>+38 (044) 444-00-44 </span>
              <span style={{ fontSize: "13px" }}>Пн-Пт 09:00 - 21:00</span>
            </Nav.Item>
            <Nav.Item className="navIco">
              <Button variant={"outline-dark"} onClick={() => setModal(true)}>
                Залишити заявку
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
