import styles from "./MentalHealthStats.module.css";

const stats = [
  {
    tag: "FACT",
    value: "1 in 4",
    text: "People experience mental health issues each year.",
    theme: "light",
  },
  {
    tag: "YOUTH",
    value: "75%",
    text: "Issues start before the age of 24.",
    theme: "dark",
    highlight: "#FCB03D",
  },
  {
    value: "90%",
    text: "Recovery rate with proper support.",
    theme: "light",
    color: "#27B674",
  },
  {
    value: "900M",
    text: "People worldwide living with disorders.",
    theme: "light",
    color: "#169DD2",
  },
];

export default function MentalHealthStats() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Mental Health Matters</h2>
      <p className={styles.subheading}>
        Understanding the scale of the challenge is the first step.
      </p>

      <div className={styles.grid}>
        {stats.map((s, i) => (
          <div
            key={i}
            className={`${styles.cardWrapper} ${
              s.theme === "dark" ? styles.dark : ""
            }`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {s.tag && (
              <span className={styles.tag}>{s.tag}</span>
            )}

            <div className={styles.card}>
              <span
                className={styles.value}
                style={{ color: s.color || s.highlight }}
              >
                {s.value}
              </span>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
