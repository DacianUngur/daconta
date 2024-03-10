import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./dropdown.css";
import { Link } from "react-router-dom";

function NavbarDarkExample() {
  return (
    <Navbar className="dropdownelemenent">
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Produse">
              <NavDropdown.Item as={Link} to={"/websiteurihotelurisipensiuni"}>
                Website-uri Hoteluri și Pensiuni
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/websiteurirestaurante"}>
                Website-uri Restaurante
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/websiteuriatractiituristice"}>
                Website-uri atractii turistice
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/abonamentepromovare"}>
                Serviciile de promovare
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;
