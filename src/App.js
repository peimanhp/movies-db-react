import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { LoginProvider } from "./context/LoginContext";
import "./index.css";

function App() {
  return (
    <LoginProvider>
      <NavBar />
      <Home />
    </LoginProvider>
  );
}

export default App;
