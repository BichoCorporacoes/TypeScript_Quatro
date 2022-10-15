import { Link } from "react-router-dom";
import * as Z from "./style";
export default function NavBar() {
  return (
    <Z.NavBar>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <div className="sideContent">
        <table>
          <tr>
            <td>
              <Link to={"/clientes"}>Clientes</Link>
            </td>
            <td>
              <Link to={"/acomodacao"}>Acomodações</Link>
            </td>
            <td>
              <Link to={"/equipe"}>Equipe</Link>
            </td>
          </tr>
        </table>
      </div>
    </Z.NavBar>
  );
}
