import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBarAtlantis from "../../components/nav";
import * as Z from "./style";
const user = {
  id: 1,
};
export default function CadastroAdmin() {
  const navigate = useNavigate();
  return (
    <Z.Home>
      <NavBarAtlantis />
      <main>
        <div className="conteudo">
          <h1>Cadastro de Reserva Cliente Inicial</h1>
          <div className="formulario">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nome do titular</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gabriel Souza Bicho Nunes"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nome Social do titular</Form.Label>
                <Form.Control type="text" placeholder="BichoNunes" />
              </Form.Group>
              <Button
                onClick={() =>
                  navigate(`/cliente/cadastro-continue/${1}`, {
                    state: {
                      data: user.id,
                    },
                  })
                }
                as="input"
                type="submit"
                value="Submit"
              />
            </Form>
          </div>
        </div>
      </main>
    </Z.Home>
  );
}
