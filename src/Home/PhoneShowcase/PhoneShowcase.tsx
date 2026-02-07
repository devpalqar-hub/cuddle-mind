import { motion } from "framer-motion";
import "./PhoneShowcase.css";

export default function PhoneShowcase() {
  return (
    <section className="phone-section">
      <div className="phone-wrapper">

        {/* PHONE FRAME */}
        <div className="phone-sketch-frame">
          <motion.div
            className="phone-mockup"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src="/phoneimg.png" alt="App Preview" className="image"/>
          </motion.div>
        </div>

        {/* TOP BADGE */}
        <div className="badge-wrapper top">
          <div className="badge-pill">Qualified Doctors</div>
          <div className="badge-tape top-tape"></div>
        </div>

        {/* RIGHT BADGE */}
        <div className="phone-label support">24/7 Support</div>

        {/* LEFT BADGE */}
        <div className="phone-label users">Thriving Users</div>

        {/* BOTTOM BADGE */}
        <div className="badge-wrapper bottom">
          <div className="badge-pill">99% Satisfaction</div>
          <div className="badge-tape bottom-tape"></div>
        </div>

      </div>
       

{/* RIGHT — CTA */}
<div className="cta-wrapper">
  
  {/* DESKTOP: White box, buttons outside */}
  <div className="cta-desktop-view">
    <div className="cta-box">
      <h2>Get Cuddlemind App</h2>
      <p>Mental health support in your pocket.</p>
    </div>

    <p className="cta-free">Download for FREE!</p>

    <div className="cta-buttons">
      <button className="store-btn apple">
        <img src="/appstore.png" alt="Apple" /> Apple Store
      </button>

      <button className="store-btn google">
        <img src="/playstore.png" alt="Google Play" /> Google Play
      </button>
    </div>
  </div>

  
  <div className="cta-mobile-view">
    <div className="cta-box">
      <h2>Download for FREE!</h2>
      <p>Available on iOS and Android</p>
      
      <div className="cta-buttons">
        <button className="store-btn apple">
          <img src="/appstore.png" alt="Apple" /> App Store
        </button>
        <button className="store-btn google">
          <img src="/playstore.png" alt="Google Play" /> Google Play
        </button>
      </div>
    </div>
  </div>
</div>
        
    </section>
    
    
  );
}
