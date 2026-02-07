import { Link } from "react-router-dom";
import { useState,  useRef } from "react";
import { NavHashLink } from 'react-router-hash-link';
import "./navbar.css"
export default function Navbar() {
    
    const logoRef = useRef<HTMLImageElement | null>(null);
    
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    
    return (
        <>
            
            <div className="main-layout">
                 <nav className="custom-navbar">
                        <div className="custom-navbar-inner">

                            {/* LEFT: LOGO */}
                            <div className="navbar-left">
                            <img
                                ref={logoRef}
                                src="1.png"
                                alt="Cuddlemind Logo"
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
