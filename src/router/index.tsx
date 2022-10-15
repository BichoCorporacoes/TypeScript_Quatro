import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Cliente from "../pages/Client";
import Home from "../pages/Home";
import ProfileCliente from "../pages/ProfileClient";
import Team from "../pages/teams";

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/clientes/:id" element={<ProfileCliente />} />
    </RoutesWrapper>
  );
}
export default Routes;
