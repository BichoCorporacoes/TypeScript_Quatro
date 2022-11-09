import { Route, Routes as RoutesWrapper } from "react-router-dom";
import CadastroAdminParteDois from "../pages/CadastroAdmin/ParteDois/";
import CadastroAdmin from "../pages/CadastroAdmin";
import Cliente from "../pages/Client";
import Home from "../pages/Home";
import ProfileCliente from "../pages/ProfileClient";
import Team from "../pages/teams";
import LoginPage from "../pages/Login";

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/clientes/:id" element={<ProfileCliente />} />
      <Route path="/cliente/clientes-cadastro" element={<CadastroAdmin />} />
      <Route
        path="/cliente/cadastro-continue/:id"
        element={<CadastroAdminParteDois />}
      />
    </RoutesWrapper>
  );
}
export default Routes;
