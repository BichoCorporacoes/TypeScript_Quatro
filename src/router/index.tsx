import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Cliente from "../pages/Client";
import Home from "../pages/Home";
import Team from "../pages/teams";

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/clientes" element={<Cliente />} />
    </RoutesWrapper>
  );
}
export default Routes;
