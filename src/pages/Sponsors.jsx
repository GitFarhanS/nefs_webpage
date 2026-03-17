import { sponsors } from "../data/teamData";

export default function Sponsors() {
  const tiers = [
    { key: "platinum", label: "Platinum" },
    { key: "gold", label: "Gold" },
    { key: "silver", label: "Silver" },
    { key: "bronze", label: "Bronze" },
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Sponsors 2025/26</h1>
          <p>We are grateful for the continued support of our partners who help us deliver exceptional opportunities to our members.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Our Partners</h2>
          <p>
            NEFS partners with leading firms across finance, consulting, and professional services to bring industry insights, networking opportunities, and career support to our members.
          </p>

          {tiers.map(({ key, label }) => {
            const tierSponsors = sponsors[key];
            if (!tierSponsors || tierSponsors.length === 0) return null;
            return (
              <div key={key} className={`sponsor-tier tier-${key}`}>
                <h3>
                  <span className="tier-badge">{label}</span>
                  Sponsors
                </h3>
                <div className="sponsor-detail-grid">
                  {tierSponsors.map((s) => (
                    <div key={s.name} className="sponsor-detail-card">
                      <div className="sponsor-logo-wrap">
                        <img src={s.logo} alt={s.name} loading="lazy" />
                      </div>
                      <p>{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <h2>Interested in Sponsoring?</h2>
          <p>
            Partner with NEFS to connect with ambitious students and support the next generation of finance and economics professionals.
          </p>
          <a href="mailto:admin@uonnefs.com" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
