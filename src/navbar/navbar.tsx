import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { NavHashLink } from 'react-router-hash-link';
import "./navbar.css"
export default function Navbar() {
    const [showSplash, setShowSplash] = useState(true);
    const logoRef = useRef<HTMLImageElement | null>(null);
    const splashLogoRef = useRef<HTMLImageElement | null>(null);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        const splashLogo = splashLogoRef.current;
        const navbarLogo = logoRef.current;
        if (!splashLogo || !navbarLogo) return;

        const animateSplash = () => {
            splashLogo.style.transform = `translate(0, 0) scale(1) rotate(0deg)`;
            splashLogo.style.transition = "none";
            splashLogo.style.animation = "jump 1s ease-in-out";

            setTimeout(() => {
                const splashRect = splashLogo.getBoundingClientRect();
                const navbarRect = navbarLogo.getBoundingClientRect();

                const deltaX = navbarRect.left - splashRect.left;
                const deltaY = navbarRect.top - splashRect.top;
                const scale = navbarRect.width / splashRect.width;

                splashLogo.classList.add("fly");
                splashLogo.style.transition = "transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
                splashLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale}) rotate(2deg)`;
            }, 1000);

            setTimeout(() => {
                const splash = splashLogo.closest(".splash-screen");
                if (splash) splash.classList.add("fade-out");
            }, 2200);

            const timer = setTimeout(() => {
                setShowSplash(false);
            }, 3000);

            return () => clearTimeout(timer);
        };

        if (splashLogo.complete) {
            requestAnimationFrame(animateSplash);
        } else {
            splashLogo.addEventListener("load", () => requestAnimationFrame(animateSplash));
        }
    }, []);

    return (
        <>
            {showSplash && (
                <div className="splash-screen">
                    <img ref={splashLogoRef} src="logo.png" alt="Logo" className="splash-logo" />
                    <div className="splash-message">
                        Loading
                        <span className="loading-dots">
                            <span></span><span></span><span></span>
                        </span>
                    </div>
                </div>
            )}

            <div className={`main-layout ${showSplash ? "invisible-behind" : ""}`}>
                 <nav className="custom-navbar">
                        <div className="custom-navbar-inner">

                            {/* LEFT: LOGO */}
                            <div className="navbar-left">
                            <img
                                ref={logoRef}
                                src="1.png"
                                alt="jfjhf"
                                className="navbar-logo"
                            />
                            </div>

                            {/* CENTER: MENU */}
                            <div className={`navbar-center ${isNavbarOpen ? "show" : ""}`}>
                            {/* UPDATED: Home link to scroll to top */}
                            <NavHashLink smooth to="/#top" className="nav-item" onClick={() => setIsNavbarOpen(false)}>
                                Home
                            </NavHashLink>

                            {/* UPDATED: About link to scroll to the AboutUs section ID */}
                            <NavHashLink 
                                smooth 
                                to="/#about-us" 
                                className="nav-item" 
                                onClick={() => setIsNavbarOpen(false)}
                            >
                                About
                            </NavHashLink>
                            <Link  to="/contact" className="nav-item" onClick={() => setIsNavbarOpen(false)}>Contacts and FAQ</Link>
                            <NavHashLink 
                                smooth 
                                to="/#professionals-section" 
                                className="nav-item" 
                                onClick={() => setIsNavbarOpen(false)}
                            >
                                Team
                            </NavHashLink>
                            <NavHashLink 
                                smooth 
                                to="/#stories-section" 
                                className="nav-item" 
                                onClick={() => setIsNavbarOpen(false)}
                            >
                                Stories
                            </NavHashLink>
                            </div>

                            {/* RIGHT: BUTTON */}
                            <div className="navbar-right">
                            <button className="download-btn">Download App</button>

                            {/* Mobile Toggle */}
                            <button
                                className="navbar-toggler d-lg-none"
                                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                            >
                                ☰
                            </button>
                            </div>

                        </div>
                        </nav>
        </div>
        </>
    );
}
