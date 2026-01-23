import { useEffect, useRef } from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.shadow} />

        <div className={styles.card}>
          {/* ICON */}
          <div ref={iconRef} className={styles.iconWrap}>
            <svg
              className={styles.iconSvg}
              viewBox="0 0 160 160"
              fill="none"
            >
              {/* back circle */}
              <circle
                cx="90"
                cy="80"
                r="65"
                transform="translate(4 8) rotate(-6 90 80)"
                className={styles.circleBack}
              />

              {/* front circle */}
              <circle
                cx="70"
                cy="80"
                r="65"
                className={styles.circleFront}
              />

              {/* hollow heart */}
               <g transform="translate(6 15)">
                <path
                className={styles.heart}
                pathLength="1"
                transform="rotate(-8 80 80)"
                d="M80 92
                    C80 92, 55 72, 55 56
                    C55 46, 62 40, 70 40
                    C75 40, 78 43, 80 46
                    C82 43, 85 40, 90 40
                    C98 40, 105 46, 105 56
                    C105 72, 80 92, 80 92 Z"
                />
            </g>
            </svg>
          </div>

          {/* CONTENT */}
          <div className={styles.content}>
            <h3 className={styles.title}>
              ABOUT US
              <span className={styles.underline} />
            </h3>

            <p className={styles.text}>
              At Cuddlemind, we believe that everyone deserves easy access to
              mental healthcare. We connect you with compassionate, verified
              experts to help you thrive in life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
