import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "./Home/Home";
import AboutUs from "./aboutUs/AboutUs";
import "./App.css";
import Footer from "./footer/footer";
import Privacy from "./privacy/Privacy";
import Terms from "./terms/Terms";
import Contact from "./contact/Contact";
import Professionals from "./professionals/Professionals";
import Testimonials from "./testimonials/Testimonials";

export default function App() {
  return (
    <>
        <div className="app">
          <main className="content">
             <Navbar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/team" element={<Professionals/>} />
                <Route path="/stories" element={<Testimonials/>} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms/>} />
              </Routes>
          </main>

          <Footer />
        </div>
    </>
  );
}
