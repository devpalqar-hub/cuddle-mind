import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "./Home/Home";
import AboutUs from "./aboutUs/AboutUs";
import "./App.css";
import Footer from "./footer/footer";
import Privacy from "./privacy/Privacy";
import Terms from "./terms/Terms";
import Contact from "./contact/Contact";

export default function App() {
  return (
    <>
        <div className="app">
          <main className="content">
             <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/team" element={<h1>Team</h1>} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms/>} />
              </Routes>
          </main>

          <Footer />
        </div>
    </>
  );
}
