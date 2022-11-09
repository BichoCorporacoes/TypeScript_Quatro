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
              defaultActiveKey="docs"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="docs" title="Documentos">
                <div className="documento">{documentos.formulario()}</div>
              </Tab>
              <Tab eventKey="tells" title="Telefone">
                <div className="telefones">{telefones.formulario()}</div>
              </Tab>
              <Tab eventKey="deps" title="Dependentes">
                <div className="dependentes">{dependentes.formulario()}</div>
              </Tab>
              <Tab eventKey="ends" title="Endereco/Acomodação">
                <div className="endereco">
                  <div className="controll">
                    <h3>Adicionar Endereço</h3>
                    <div className="end-controll">
                      {end.map((endInf) => {
                        return (
                          <span className="p-float-label span-controll">
                            <InputText
                              id={endInf}
                              onChange={(e) => setValue(e.target.value)}
                            />
                            <label htmlFor={endInf}>{endInf}</label>
                          </span>
                        );
                      })}
                    </div>
                    <h3>Acomodações</h3>
                    <h3>DropDown das Acomodações</h3>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
          <button className="btn-end">Terminar Cadastro</button>
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
