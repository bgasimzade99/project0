import "./css/App.css";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;