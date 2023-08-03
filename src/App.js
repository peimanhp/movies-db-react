import { Routes, Route, Navigate } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import Genres from "./pages/Genres";
import NotFound from "./pages/NotFound";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <LoginProvider>
      <div className="d-flex flex-column justify-content-between">
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/movies-db-react" element={<Navigate to="/" replace />} /> */}
            <Route path="/search/:id" element={<Movie />} />
            <Route path="/search" element={<Search />} />
            <Route path="/genres/:name" element={<Genres />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </LoginProvider>
  );
}

export default App;
