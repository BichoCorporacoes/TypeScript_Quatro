import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const user = {
  nome: "Gabriel Souza Bicho Nunes",
  nomeSocial: "ZeroPirata",
  documento: [
    {
      tipo: "CPF",
      dataEmisao: "10/05/2018",
      numero: "40028922",
    },
  ],
  endereco: {
    rua: "Três Corações",
    bairro: "31 de março",
    cidade: "São José dos campos",
    numero: "235",
    cep: "12235-700",
    pais: "Brasil",
    estado: "São Paulo",
  },
  telefone: [
    {
      ddd: "12",
      numero: "4002-5800",
    },
    {
      ddd: "12",
      numero: "4002-5800",
    },
  ],
  dependente: [
    {
      nome: "Murilo Fattore",
      nomeSocial: "Furilo Mattore",
      endereco: {
        rua: "Três Corações",
        bairro: "31 de março",
        cidade: "São José dos campos",
        numero: "235",
        cep: "12235-700",
        pais: "Brasil",
        estado: "São Paulo",
      },
      telefone: [
        {
          ddd: "12",
          numero: "4002-5800",
        },
      ],
      documento: [
        {
          tipo: "CPF",
          dataEmisao: "10/05/2018",
          numero: "580-112-123.2",
        },
      ],
    },
  ],
  reserva: {
    nomeReserva: "Familia Simples",
    camaSolteiro: 2,
    camaCasal: 1,
    suite: 1,
    climatizacao: true,
    garagem: 1,
  },
};
export default function ProfileCliente() {
  const [key, setKey] = useState("info");
  const reservaFeita = (
    <Popover id="popover-basic">
      <Z.Reserva>
        <Popover.Header>
          <h1>{user.reserva.nomeReserva}</h1>
        </Popover.Header>
        <Popover.Body className="reserva">
          <div>
            <div className="camas">
              <span>Quantidade de Camas</span>
              <p>solteiro: {user.reserva.camaSolteiro}</p>
              <p>Casal: {user.reserva.camaCasal}</p>
            </div>
            <div className="adicional">
              <span>Adicionais</span>
              <p>suite: {user.reserva.suite}</p>
              <p>
                Climatização: {converterBooleano(user.reserva.climatizacao)}
              </p>
              <p>suite: {user.reserva.suite}</p>
              <p>garagem: {user.reserva.garagem}</p>
            </div>
          </div>
        </Popover.Body>
      </Z.Reserva>
    </Popover>
  );
  const documentoCliente = (data: string, numero: string) => {
    return (
      <Popover id="popover-basic">
        <Z.Documentos>
          <Popover.Body>
            <p>
              Data de emissão:
              <br /> {data}
            </p>
            <p>
              Numero do Documento: <br />
              {numero}
            </p>
          </Popover.Body>
        </Z.Documentos>
      </Popover>
    );
  };
  function converterBooleano(valor: Boolean) {
    if (valor) {
      return `Sim`;
    } else {
      return `Não`;
    }
  }
  function dependentesTrue(valor: number) {
    if (valor > 0) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <Z.Perfil>
      <NavBarAtlantis />
      <Z.Home>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3 tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          fill
        >
          <Tab eventKey="info" title="Informações Basicas">
            <div className="info">
              <div className="perfil">
                <div className="info-perfil">
                  <h3>Nome: {user.nome}</h3>
                  <p>Nome Social: {user.nomeSocial}</p>
                </div>
                <div className="overLay">
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={reservaFeita}
                  >
                    <Button size="lg" variant="outline-success">
                      Checar reserva
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>

              <div className="telefones">
                <h3>Telefones</h3>
                <div className="controllTell">
                  {user.telefone.map((tell, index) => {
                    return (
                      <div className="tell">
                        {index + 1} - {tell.ddd} - {tell.numero}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="endereco">
                <h3>Endereço</h3>
                <p>Pais: {user.endereco.pais}</p>
                <p>Estado: {user.endereco.estado}</p>
                <p>Codigo Postal:{user.endereco.cep}</p>
                <p>Cidade: {user.endereco.cidade}</p>
                <p>Bairro: {user.endereco.bairro}</p>
                <p>Rua: {user.endereco.rua}</p>
                <p>Numero: {user.endereco.numero}</p>
              </div>
              <div className="documentosCliente">
                <h3>Documentos</h3>
                <div className="overLayDocs">
                  {user.documento.map((docs) => {
                    return (
                      <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={documentoCliente(docs.dataEmisao, docs.numero)}
                      >
                        <Button size="lg" variant="outline-primary">
                          {docs.tipo}
                        </Button>
                      </OverlayTrigger>
                    );
                  })}
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="deps"
            title="Dependente"
            disabled={dependentesTrue(user.dependente.length)}
          >
            <div className="info">
              <div className="deps">
                {user.dependente.map((dep) => {
                  return (
                    <div className="documentosDependente">
                      <h3>Nome: {dep.nome}</h3>
                      <p>Nome Social: {dep.nomeSocial}</p>
                      <div className="overLayDocsDeps">
                        <div className="telefonesDep">
                          <h3>Telefones: </h3>
                          <div className="controllTellDependente">
                            {dep.telefone.map((tell, index) => {
                              return (
                                <div className="telldependente">
                                  [{index + 1}] ({tell.ddd}) {tell.numero}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <h4>Documentos</h4>
                        <div className="docsConfig">
                          {dep.documento.map((docs) => {
                            return (
                              <OverlayTrigger
                                trigger="click"
                                placement="bottom"
                                overlay={documentoCliente(
                                  docs.dataEmisao,
                                  docs.numero
                                )}
                              >
                                <Button size="lg" variant="outline-primary">
                                  {docs.tipo}
                                </Button>
                              </OverlayTrigger>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Tab>
        </Tabs>
      </Z.Home>
    </Z.Perfil>
  );
}
