import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./HeroSection.css";
import { useRef } from "react";


export default function HeroSection() {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  // Animation Variant for text and general fade-ups
  const [svgKey, setSvgKey] = useState(0);

  useEffect(() => {
    setSvgKey(Date.now()); // new key on every reload
  }, []);

  // Scroll-based animation for divider
  const { scrollYProgress } = useScroll({
  target: dividerRef,
  offset: ["start end", "end start"]
});

  const [screenW, setScreenW] = useState(window.innerWidth);
const dividerX = useTransform(
  scrollYProgress,
  [0, 2],
  [screenW * 0.25, -screenW * 0.25]
);



  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  // Animation Variant for drawing SVG paths
  const drawPath = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
  };

  // Animation for yellow accents (pop-in effect)
  const popIn = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

    useEffect(() => {
      const resize = () => setScreenW(window.innerWidth);
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }, []);

  return (
    <section className="hero-section" id="top">
      <div className="hero-left">
        <motion.div 
          className="hero-card"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }} 
        >
          <motion.span variants={fadeUp} className="hero-badge">
            #1 Mental Health Platform
          </motion.span>

          <h1 className="hero-title">
            <motion.span variants={fadeUp} style={{ display: "inline-block" }}>
              Your Mental
            </motion.span> 
            <br />
            <motion.span 
              variants={fadeUp} 
              className="hero-highlight" 
              style={{ display: "inline-block", position: "relative" }}
            >
              Health
              {/* HAND-DRAWN WAVE UNDER TEXT */}
              <span className="hero-wave-line">
                <svg  viewBox="0 0 200 20" preserveAspectRatio="none" className="wave-svg">
                  <motion.path
                    d="M2 10 Q 50 2, 100 10 T 198 10"
                    fill="none"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    variants={drawPath}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </svg>
              </span>
            </motion.span>
            <br />
            <motion.span variants={fadeUp} style={{ display: "inline-block" }}>
              Journey <br /> Starts Here
            </motion.span>
          </h1>

          <motion.p variants={fadeUp} className="hero-description">
            Connect with top psychologists and mental health professionals
            through our secure, easy-to-use platform.
          </motion.p>
        </motion.div>
      </div>

      <div className="hero-right">
        <div className="image-stack">
          <svg key={svgKey} className="hero-doodle" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            {/* 1. MAIN CIRCLE */}
            <motion.path
              d="M180 120 C90 160, 70 280, 120 380 C170 480, 320 520, 440 440 C540 360, 520 220, 420 140 C340 80, 240 80, 180 120"
              fill="none"
              stroke="#000"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawPath}
              initial="initial"
              animate="animate"
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* 2. ARROW BODY */}
            <motion.path
              d="M-450 285 C-60 220, 20 200, 80 200"
              fill="none"
              stroke="#000"
              strokeWidth="12"
              strokeLinecap="round"
              variants={drawPath}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 1.0 }}
            />

            {/* 3. ARROW HEAD */}
            <motion.path
              d="M65 185 L95 200 L65 215"
              fill="none"
              stroke="#000"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={drawPath}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, delay: 1.8 }}
            />

            {/* 4. YELLOW ACCENT STROKES */}
            <motion.path
              d="M45 155 L55 135"
              stroke="#F4A623"
              strokeWidth="5"
              strokeLinecap="round"
              variants={popIn}
              initial="initial"
              animate="animate"
              transition={{ type: "spring", stiffness: 300, delay: 2.2 }}
            />
            <motion.path
              d="M65 160 L80 140"
              stroke="#F4A623"
              strokeWidth="5"
              strokeLinecap="round"
              variants={popIn}
              initial="initial"
              animate="animate"
              transition={{ type: "spring", stiffness: 300, delay: 2.3 }}
            />
          </svg>

          <div className="image-back"></div>

          {/* FLOATING IMAGE */}
          <motion.div 
            className="image-front"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="/hero1.jpg" alt="Happy person" className="hero-image" />
          </motion.div>
        </div>
      </div>

      <div className="divider-wrapper">
        <motion.div 
          className="trusted-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <div className="trusted-badge">
            <div className="avatar-group">
              <img src="/avatar1.jpg" alt="user" />
              <img src="/avatar2.jpg" alt="user" />
              <img src="/avatar3.jpg" alt="user" />
            </div>
            <div className="trusted-text">
              <strong>1000+</strong>
              <span>Trusted Individuals</span>
            </div>
          </div>

          <svg 
            key={`trusted-${svgKey}`}
            className="trusted-arrow" 
            viewBox="0 0 200 200" 
            style={{ overflow: "visible", border: "1px dashed transparent" }} // Transparent border for debugging
          >
            {/* MAIN ARROW LINE */}
            <motion.path
              d="M30 20 C30 100, 110 110, 120 150"
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />

            {/* ARROW HEAD */}
            <motion.path
              d="M105 140 L120 155 L135 140"
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            />

            {/* THE SMALL YELLOW LINES (Sparks) - PRECISELY POSITIONED */}
            {/* First Line (Top Spark) */}
            <motion.line
              x1="135" y1="165" 
              x2="148" y2="170"
              stroke="#F4A623" 
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.3 }}
            />
            
            {/* Second Line (Bottom Spark) */}
            <motion.line
              x1="125" y1="172" 
              x2="125" y2="185"
              stroke="#F4A623" 
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.3 }}
            />
          </svg>
        </motion.div>

        {/* ENHANCED SECTION DIVIDER WITH SCROLL ANIMATION */}
        <div className="section-divider">
          <motion.svg 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none"
            style={{ x: dividerX }}
          >
            {/* More complex wavy pattern with multiple curves */}
            <motion.path
              d="M0 60 
                 Q 60 30, 120 60 
                 T 240 60 
                 Q 300 90, 360 60 
                 T 480 60 
                 Q 540 30, 600 60 
                 T 720 60 
                 Q 780 90, 840 60 
                 T 960 60 
                 Q 1020 30, 1080 60 
                 T 1200 60 
                 Q 1260 90, 1320 60 
                 T 1440 60"
              fill="none"
              stroke="#000000"
              strokeWidth="5.6"
              strokeLinecap="round"
              variants={drawPath}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}