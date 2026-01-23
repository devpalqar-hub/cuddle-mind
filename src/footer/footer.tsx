import styles from "./Footer.module.css";
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <img src="/1.png" alt="Cuddlemind logo" />
          <span>Cuddlemind</span>
        </div>

        {/* Links */}
        <nav className={styles.links}>
          <NavHashLink smooth to="/#about-us">
            About
          </NavHashLink>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/contact">Contact</Link>
        </nav>
              {/* Copyright */}
      <p className={styles.copyright}>
        © 2024 Cuddlemind
      </p>
      </div>
    </footer>
  );
};

export default Footer;
