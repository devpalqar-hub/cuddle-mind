import AboutUs from "./aboutUs/AboutUs";
import "./App.css";
import Footer from "./footer/footer";
import MentalHealthStats from "./mentalHealthStatus/MentalHealthStats";
import Professionals from "./professionals/Professionals";
import SpeakExperts from "./speakExperts/SpeakExperts";
import Testimonials from "./testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <main className="content">
        <AboutUs />
        <MentalHealthStats />
        <Professionals />
        <Testimonials />
        <SpeakExperts />
      </main>

      <Footer />
    </div>
  );
}

export default App;
