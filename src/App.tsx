import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "./Home/Home";
import Contact from "./contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/team" element={<h1>Team</h1>} />
      </Routes>
    </>
  );
}
