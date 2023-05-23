import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/components/Navbar.jsx";

import Enrolled from "./Pages/Enrolled.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReferEarn" element={<Enrolled />} />
      </Routes>
    </Router>
  );
}

export default App;
