import { Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./index.css";

function App() {
  return (
    <LoginProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </LoginProvider>
  );
}

export default App;
