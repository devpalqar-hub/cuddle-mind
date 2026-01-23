import styles from "./Footer.module.css";

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
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
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
