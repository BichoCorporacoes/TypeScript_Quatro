import { Route, Routes as RoutesWrapper } from "react-router-dom";
import CadastroAdminParteDois from "../pages/CadastroAdmin/ParteDois/";
import CadastroAdmin from "../pages/CadastroAdmin";
import Cliente from "../pages/Client";
import Home from "../pages/Home";
import ProfileCliente from "../pages/ProfileClient";
import LoginPage from "../pages/Login";
import Acomodacao from "../pages/acomodacao";
import CadastroFuncionario from "../pages/CadastroFuncionario";

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/clientes/:id" element={<ProfileCliente />} />
      <Route path="/cliente/clientes-cadastro" element={<CadastroAdmin />} />
      <Route path="/acomodacao" element={<Acomodacao />} />
      <Route path="/funcionario/cadastro" element={<CadastroFuncionario />} />
      <Route
        path="/cliente/cadastro-continue/:id"
        element={<CadastroAdminParteDois />}
      />
    </RoutesWrapper>
  );
}
export default Routes;
