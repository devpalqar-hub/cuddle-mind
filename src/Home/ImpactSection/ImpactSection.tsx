import "./ImpactSection.css";

export default function ImpactSection() {
  return (
    <section className="impact-section">
      <h2 className="impact-title">Making a Big Impact!</h2>

      <div className="impact-cards">
        <div className="impact-card">
          <strong>150+</strong>
          <span>Doctors</span>
        </div>

        <div className="impact-card">
          <strong>99%</strong>
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
