import styles from "./SpeakExperts.module.css";

export default function SpeakExperts() {
  return (
    <section className={styles.section}>
      <div className={styles.cardWrapper}>
        {/* Shadow */}
        <div className={styles.shadow}></div>

        {/* Main Card */}
        <div className={styles.card}>
          {/* Decorative diamond */}
          <div className={styles.diamond}></div>

          <h2>
            Speak with one of <br />
            our health experts <br />
            today.
          </h2>

          <button>Get it free</button>
        </div>
      </div>
    </section>
  );
}
