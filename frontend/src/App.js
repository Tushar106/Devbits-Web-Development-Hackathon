import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import './App.css'
import Stock from "./Stock.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="stock" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
