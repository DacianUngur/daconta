import "./navigation.css";
import NavbarDarkExample from "./dropdown products/droptdown";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavItemClick = () => {
    if (screenWidth < 780) {
      document.querySelector(".navbar-toggler").click();
    }
  };

  return (
    <>
      {screenWidth > 780 && (
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              <NavbarDarkExample />
            </li>
            <li>
              <Link to={"/desprenoi"}>Despre noi</Link>
            </li>
            <li>
              <Link to={"/sepoate"}>Se poate</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
      {screenWidth < 780 && (
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Produse" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to={"/websiteurihotelurisipensiuni"}
                  onClick={handleNavItemClick}
                >
                  Website-uri Hoteluri și Pensiuni
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/websiteurirestaurante"}
                  onClick={handleNavItemClick}
                >
                  Website-uri Restaurante
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={"/websiteuriatractiituristice"}
                  onClick={handleNavItemClick}
                >
                  Website-uri atractii turistice
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to={"/abonamentepromovare"}
                  onClick={handleNavItemClick}
                >
                  Serviciile de promovare
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to={"/desprenoi"}
                onClick={handleNavItemClick}
              >
                Despre noi
              </Nav.Link>
              <Nav.Link as={Link} to={"/sepoate"} onClick={handleNavItemClick}>
                Se poate
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"} onClick={handleNavItemClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
