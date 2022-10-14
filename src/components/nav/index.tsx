import { Link } from "react-router-dom";
import * as Z from "./style";
export default function NavBar() {
  return (
    <Z.NavBar>
      <div className="atlantis">
        <h1><Link to={"/"}>Atlantis</Link></h1>
      </div>
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
