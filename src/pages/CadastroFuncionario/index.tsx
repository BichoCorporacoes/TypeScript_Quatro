import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import { Button } from "react-bootstrap";
import { Password } from "primereact/password";

export default function CadastroFuncionario() {
  return (
    <Z.Main>
      <NavBarAtlantis />

      <main>
        <div className="cadastroFuncionario">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Nome" />
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user-plus"></i>
            </span>
            <InputText placeholder="Nome Social" />
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-at"></i>
            </span>
            <InputText placeholder="Email" />
          </div>
          <div className="p-inputgroup">
            {" "}
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <Password
              toggleMask
              className="password"
              placeholder="Senha"
              feedback={false}
            />
          </div>
          <div className="btn-controll">
            <Button className="btn">Cadastrar Novo Funcionario</Button>
          </div>
        </div>
      </main>
    </Z.Main>
  );
}
