import styles from "./Professionals.module.css";

const professionals = [
  {
    name: "Dr. Sarah",
    role: "Psychologist",
    image: "/image1.jpg",
  },
  {
    name: "Dr. James",
    role: "Therapist",
    image: "/image2.jpg",
  },
  {
    name: "Dr. Emily",
    role: "Counselor",
    image: "/image3.jpg",
  },
  {
    name: "Dr. Mike",
    role: "Psychiatrist",
    image: "/image4.jpg",
  },
];

export default function Professionals() {
  return (
    <section id="professionals-section"className={styles.section}>
      <h2 className={styles.heading}>Meet our Professionals</h2>

      <div className={styles.grid}>
        {professionals.map((p, i) => (
          <div
            key={i}
            className={styles.cardWrapper}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className={styles.shadow}></div>

            <div className={styles.card}>
              <div className={styles.tape}></div>

              <img src={p.image} alt={p.name} />

              <div className={styles.info}>
                <strong>{p.name}</strong>
                <span>{p.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
