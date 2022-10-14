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
          <h1>Titulares</h1>
          <div className="mapCliente">
            {cliente.card(
              "Gabriel Souza Bicho Nunes",
              "432.432.432-32",
              "Solteiro Simples",
              "#"
            )}
            {cliente.card(
              "Red Wacky League",
              "432.432.432-32",
              "Familia Super",
              "#"
            )}
          </div>
        </div>
      </main>
    </Z.Home>
  );
}
