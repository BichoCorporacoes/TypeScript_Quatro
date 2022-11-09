import { Form } from "react-bootstrap";
import NavBarAtlantis from "../../components/nav";
import * as Z from "./styles";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
export default function LoginPage() {
  const [value3, setValue3] = useState("");

  return (
    <Z.Main>
      <NavBarAtlantis />
      <main className="main">
        <div className="login-content">
          <Form className="formulario">
            <div className="controll-login">
              <h1>Efetue o login</h1>
              <label htmlFor="username2" className="block">
                Usuario
              </label>
              <InputText id="username2" aria-describedby="username2-help" />
              <label htmlFor="username2" className="block">
                Senha
              </label>
              <Password
                onChange={(e) => setValue3(e.target.value)}
                toggleMask
                className="password"
                feedback={false}
              />
            </div>
          </Form>
        </div>
        <div className="img-content">
          <h1>Antlatis</h1>
        </div>
      </main>
    </Z.Main>
  );
}
