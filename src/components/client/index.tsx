import { Link } from "react-router-dom";
import * as Z from "./style";
export default class Client {
  card(nome: string, cpf: string, reserva: string, link: string) {
    return (
      <Z.Home>
        <div className="card-info">
          <div className="info-client">
            <h2>Nome: {nome}</h2>
            <h3>CPF: {cpf}</h3>
            <h3>Reserva: {reserva} </h3>
          </div>
          <div className="link">
            <Link to={`${link}`}>Ver Detalhes</Link>
          </div>
        </div>
      </Z.Home>
    );
  }
}
