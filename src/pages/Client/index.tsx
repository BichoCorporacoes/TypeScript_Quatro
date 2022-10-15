import Client from "../../components/client";
import NavBar from "../../components/nav";
import * as Z from "./style";

export default function Cliente() {
  const cliente = new Client();
  return (
    <Z.Home>
      <NavBar />
      <main>
        <div className="conteudo">
          <h1>Clientes Titulares</h1>
          <div className="mapCliente">
            {cliente.card(
              "Gabriel Souza ",
              "432.432.432-32",
              "Familia Simples",
              `${1}`
            )}
          </div>
        </div>
      </main>
    </Z.Home>
  );
}
