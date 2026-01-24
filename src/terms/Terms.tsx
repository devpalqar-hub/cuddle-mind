import styles from "./Terms.module.css"; 

export default function Terms() {
  const lastUpdated = "January 23, 2026";

  return (
    <div className={styles.legalWrapper}>
      <div className={styles.container}>
        <section id="terms-conditions" className={styles.section}>
          <h1 className={styles.mainTitle}>Terms & Conditions</h1>
          <p className={styles.date}>Last Updated: {lastUpdated}</p>

          <div className={styles.content}>
            <h3>1. Use of the App</h3>
            <p>CuddleMind provides a platform to connect users with mental health professionals through chat, voice, or video. It is not an emergency service.</p>

            <h3>2. Eligibility</h3>
            <p>Users must be 13 years or older. Users under 18 are responsible for obtaining parental or guardian consent.</p>

            <h3>3. Not an Emergency Service</h3>
            <p>CuddleMind is not intended for crisis situations. Contact local emergency services if needed.</p>

            <h3>4. User Responsibilities</h3>
            <p>Users must use the app lawfully, respectfully, and must not share harmful or abusive content.</p>

            <h3>5. Payments & Subscriptions</h3>
            <p>Payments are handled by third-party providers. Fees are non-refundable unless stated otherwise.</p>

            <h3>6. Intellectual Property</h3>
            <p>All content and branding belong to CuddleMind and may not be used without permission.</p>

            <h3>7. Account Suspension or Termination</h3>
            <p>Accounts may be suspended or terminated for violations of these terms.</p>

            <h3>8. Limitation of Liability</h3>
            <p>CuddleMind is not responsible for outcomes of therapy sessions. Services are provided as-is.</p>

            <h3>9. Changes to Terms</h3>
            <p>Terms may be updated at any time. Continued use indicates acceptance.</p>

            <h3>10. Contact Information</h3>
            <p>Email: <a href="mailto:support@cuddlemind.com">support@cuddlemind.com</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}