import { Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <LoginProvider>
      <NavBar />
      <Routes>        
        <Route path="/" element={<Home />} />
      </Routes>
    </LoginProvider>
  );
}

export default App;
