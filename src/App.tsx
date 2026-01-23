import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "./Home/Home";
import Contact from "./contact/Contact";
import AboutUs from "./aboutUs/AboutUs";
import "./App.css";
import Footer from "./footer/footer";
import MentalHealthStats from "./mentalHealthStatus/MentalHealthStats";
import Professionals from "./professionals/Professionals";
import SpeakExperts from "./speakExperts/SpeakExperts";
import Testimonials from "./testimonials/Testimonials";

export default function App() {
  return (
    <>
        <div className="app">
          <main className="content">
             <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/team" element={<h1>Team</h1>} />
              </Routes>
            <AboutUs />
            <MentalHealthStats />
            <Professionals />
            <Testimonials />
            <SpeakExperts />
          </main>

          <Footer />
        </div>
    </>
  );
}
