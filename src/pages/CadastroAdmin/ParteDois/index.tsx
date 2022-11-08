import { useState } from "react";
import NavBarAtlantis from "../../../components/nav";
import CadastroDocs from "../../../components/DocsRegister/docsRegister";
import * as Z from "./style";
import { InputText } from "primereact/inputtext";
import CadastroTelefone from "../../../components/telefoneRegister/CadastroTell";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";
import DependenteCadastro from "../../../components/DepsRegister";
export default function CadastroAdminParteDois() {
  const documentos = new CadastroDocs();
  const telefones = new CadastroTelefone();
  const dependentes = new DependenteCadastro();
  const end = ["Rua", "Bairro", "Cidade", "Numero", "Cep", "Pais", "Estado"];
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <Z.Home>
      <NavBarAtlantis />
      <main>
        <div className="conteudo">
          <div className="formulario">
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="home" title="Documentos">
                {documentos.formulario()}
              </Tab>
              <Tab eventKey="profile" title="Telefone">
                {" "}
                {telefones.formulario()}
              </Tab>
              <Tab eventKey="longer-tab" title="Dependentes">
                {dependentes.formulario()}
              </Tab>
              <Tab eventKey="contact" title="Endereco/Acomodação">
                <h3>Adicionar Endereço</h3>
                {end.map((endInf) => {
                  return (
                    <span className="p-float-label">
                      <InputText
                        id={endInf}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <label htmlFor={endInf}>{endInf}</label>
                    </span>
                  );
                })}
                <h3>Acomodações</h3>
                <h3>DropDown das Acomodações</h3>
              </Tab>
            </Tabs>
          </div>
          <button>Terminar Cadastro</button>
        </div>
      </main>
    </Z.Home>
  );
}

/*
rua
bairro
cidade
numero
cep
pais
estado
*/
