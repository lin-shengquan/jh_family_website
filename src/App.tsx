import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Family from "@/pages/Family";
import Gallery from "@/pages/Gallery";
import Diary from "@/pages/Diary";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/family" element={<Family />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </Router>
  );
}
