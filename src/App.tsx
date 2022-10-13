import { BrowserRouter } from "react-router-dom";
import Routes from "./router";
import './assets/global.css'
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
export default App;
