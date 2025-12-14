import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Homepage from "./Pages/Homapage";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Services from "./Pages/Services";
import News from "./Pages/News";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Conatct";
import IndustrialSector from "./Pages/IndustrialSector";
import ArchitecturalSector from "./Pages/ArchitecturalSector";
import DecorativeSheets from "./Pages/DecorativeSheets";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/News" element={<News/>} />
        <Route path="/IndustrialSector" element={<IndustrialSector/>} />
        <Route path="/ArchitecturalSector" element={<ArchitecturalSector/>} />
        <Route path="DecorativeSheets" element={<DecorativeSheets/>} />

        {/* Products */}
        <Route path="/products" element={<Products />} />

        {/* Services */}
        <Route path="/Services" element={<Services />} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
