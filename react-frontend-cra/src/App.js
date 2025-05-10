import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
