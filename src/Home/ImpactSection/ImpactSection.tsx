import { useEffect, useRef } from "react";
import "./ImpactSection.css";

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const counters = section.querySelectorAll<HTMLElement>("[data-count]");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        counters.forEach((counter: HTMLElement) => {
          const target = Number(counter.dataset.count);
          const suffix = counter.dataset.suffix ?? "";
          let current = 0;
          const increment = Math.ceil(target / 60);

          const update = () => {
            current += increment;

            if (current >= target) {
              counter.textContent = `${target}${suffix}`;
            } else {
              counter.textContent = `${current}${suffix}`;
              requestAnimationFrame(update);
            }
          };

          update();
        });

        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-section" ref={sectionRef}>
      <h2 className="impact-title">Making a Big Impact!</h2>

      <div className="impact-cards">
        <div className="impact-card">
          <strong data-count="150" data-suffix="+">0+</strong>
          <span>Doctors</span>
        </div>

        <div className="impact-card">
          <strong data-count="99" data-suffix="%">0%</strong>
          <span>Happier</span>
        </div>

        <div className="impact-card">
          <strong>24/7</strong>
          <span>Support</span>
        </div>
      </div>
    </section>
  );
}
