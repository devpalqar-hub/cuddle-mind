
import styles from "./Privacy.module.css";

export default function Privacy() {
  const lastUpdated = "January 23, 2026";

  return (
    <div className={styles.legalWrapper}>
      <div className={styles.container}>
        {/* PRIVACY POLICY SECTION */}
        <section id="privacy-policy" className={styles.section}>
          <h1 className={styles.mainTitle}>Privacy Policy</h1>
          <p className={styles.date}>Last Updated: {lastUpdated}</p>

          <div className={styles.content}>
            <h3>1. Information We Collect</h3>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number or email address, profile details, and payment information processed securely by third-party providers.</li>
              <li><strong>Chat & Session Information:</strong> Messages exchanged with mental health professionals and session details such as date, duration, and type.</li>
              <li><strong>Technical Information:</strong> Device type, IP address, and app usage data.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>To provide mental health services, connect users with professionals, improve the app, process payments, and send important notifications.</p>

            <h3>3. Data Security</h3>
            <p>We use reasonable security measures to protect your data. However, no method of transmission or storage is completely secure.</p>

            <h3>4. Information Sharing</h3>
            <p>We do not sell or rent personal information. Data may be shared with professionals, trusted service providers, or legal authorities when required.</p>

            <h3>5. Your Rights</h3>
            <p>You may access, update, or request deletion of your data and withdraw consent at any time.</p>

            <h3>6. Changes to This Privacy Policy</h3>
            <p>We may update this policy periodically. Continued use indicates acceptance of changes.</p>

            <h3>7. Contact Us</h3>
            <p>Email: <a href="mailto:support@cuddlemind.com">support@cuddlemind.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}