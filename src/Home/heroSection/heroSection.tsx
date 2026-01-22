import { motion } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-card">
          <span className="hero-badge">#1 Mental Health Platform</span>

          <h1 className="hero-title">
            Your Mental <br />
            <span className="hero-highlight">Health</span>

            {/* HAND-DRAWN WAVE */}
            <span className="hero-wave-line">
              <svg
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                className="wave-svg"
              >
              <motion.path
                  d="M2 10 Q 50 2, 100 10 T 198 10"
                  fill="none"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength={1}
                  initial={{ strokeDasharray: 1, strokeDashoffset: 1 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
                />
              </svg>
            </span>

            Journey <br />
            Starts Here
          </h1>

          <p className="hero-description">
            Connect with top psychologists and mental health professionals
            through our secure, easy-to-use platform.
          </p>
        </div>
      </div>
   {/* RIGHT SIDE – IMAGE (STACKED CARD LOOK) */}
<div className="hero-right">
  <div className="image-stack">

 
 <svg
  className="hero-doodle"
  viewBox="0 0 600 600"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* HAND-DRAWN CIRCLE */}
  <path
    d="
      M180 120
      C90 160, 70 280, 120 380
      C170 480, 320 520, 440 440
      C540 360, 520 220, 420 140
      C340 80, 240 80, 180 120
    "
    fill="none"
    stroke="#000"
    strokeWidth="14"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* ARROW BODY — STRICTLY OUTSIDE */}
  <path
    d="
      M-450 285
      C-60 220, 20 200, 80 200
    "
    fill="none"
    stroke="#000"
    strokeWidth="12"
    strokeLinecap="round"
  />

  {/* ARROW HEAD — STILL OUTSIDE */}
  <path
    d="
      M65 185
      L95 200
      L65 215
    "
    fill="none"
    stroke="#000"
    strokeWidth="12"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* YELLOW ACCENT STROKES — OUTSIDE */}
  <path
    d="M45 155 L55 135"
    stroke="#F4A623"
    strokeWidth="5"
    strokeLinecap="round"
  />
  <path
    d="M65 160 L80 140"
    stroke="#F4A623"
    strokeWidth="5"
    strokeLinecap="round"
  />
</svg>


    <div className="image-back"></div>

    <div className="image-front">
      <img
        src="/hero1.jpg"
        alt="Happy person"
        className="hero-image"
      />
    </div>

  </div>
</div>
<div className="divider-wrapper">

  {/* TRUSTED BADGE + ARROW */}
  <div className="trusted-wrapper">
    <div className="trusted-badge">
      <div className="avatar-group">
        <img src="/avatar1.jpg" />
        <img src="/avatar2.jpg" />
        <img src="/avatar3.jpg" />
      </div>

      <div className="trusted-text">
        <strong>1000+</strong>
        <span>Trusted Individuals</span>
      </div>
    </div>

    <svg
      className="trusted-arrow"
      viewBox="0 0 200 200"
    >
      <path
        d="M30 20 C30 100, 110 110, 120 150"
        fill="none"
        stroke="#000"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M105 145 L120 160 L135 145"
        fill="none"
        stroke="#000"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M118 165 L112 175" stroke="#F4A623" strokeWidth="4" />
      <path d="M130 165 L136 175" stroke="#F4A623" strokeWidth="4" />
    </svg>
  </div>

  {/* WAVY DIVIDER */}
  <div className="section-divider">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path
        d="
          M0 40
          C120 20, 240 60, 360 40
          C480 20, 600 60, 720 40
          C840 20, 960 60, 1080 40
          C1200 20, 1320 60, 1440 40
        "
        fill="none"
        stroke="#000"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  </div>
</div>

    </section>
    </>
  );
}
