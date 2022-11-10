import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

import * as Z from "./style";
export default function NavBarAtlantis() {
  return (
    <Z.NavBar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="atlantis">
          <Link to={"/"}>Antlatis</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="response"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="sideContent">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {["Acomodação", "Clientes", "Login"].map((itensNav) => {
                if (itensNav.includes("Clientes")) {
                  return (
                    <NavDropdown
                      title="Clientes"
                      id="collasible-nav-dropdown"
                      menuVariant="white"
                    >
                      <NavDropdown.Item className="DropDownItem">
                        <Link to={"/cliente/clientes-cadastro"}>
                          Cadastrar Clientes
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className="DropDownItem">
                        <Link to={"/clientes"}>Listar Clientes</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  );
                } else if ("Acomodação") {
                  return (
                    <Nav.Link>
                      <Link to={`/acomodacao`}>{itensNav}</Link>
                    </Nav.Link>
                  );
                } else {
                  return (
                    <Nav.Link>
                      <Link to={`/${itensNav.toLowerCase()}`}>{itensNav}</Link>
                    </Nav.Link>
                  );
                }
              })}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Z.NavBar>
  );
}
