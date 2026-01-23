import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Direct yet friendly tone! Loved the experience. The doctors are so kind.",
    name: "VICTORIA W.",
  },
  {
    text: "Changed my life. I found a therapist who truly understands me.",
    name: "THOMAS M.",
  },
  {
    text: "The app is so easy to use and the sessions are seamless.",
    name: "SARAH J.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        What our satisfied <br /> clients have to say
      </h2>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.cardWrapper}>
            <div className={styles.shadow}></div>

            <div className={styles.card}>
              <span className={styles.quote}>“</span>

              <p className={styles.text}>"{t.text}"</p>

              <div className={styles.divider} />

              <span className={styles.name}>{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
