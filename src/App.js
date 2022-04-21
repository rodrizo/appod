import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/favorites">Favorites</Link>
        <Link to="/">Home</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="favorites" element={<h1>Favs </h1>} />
      </Routes>
    </Router>
  );
}
