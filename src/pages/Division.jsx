import { useParams, Navigate } from "react-router-dom";
import { divisions } from "../data/teamData";
import TeamGrid from "../components/TeamGrid";
import { RevealSection } from "../components/ScrollReveal";

export default function Division() {
  const { slug } = useParams();
  const division = divisions.find((d) => d.slug === slug);

  if (!division) {
    return <Navigate to="/" replace />;
  }

  return (
    <div key={slug}>
      <section className="page-header">
        <div className="container">
          <h1 className="hero-fade-up">{division.name}</h1>
          <p className="hero-fade-up" style={{ animationDelay: "0.15s" }}>{division.shortDesc}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <RevealSection>
            <h2>About This Division</h2>
            <p>{division.description}</p>
          </RevealSection>

          {division.skills && division.skills.length > 0 && (
            <RevealSection>
              <h2>What You&apos;ll Learn</h2>
              <div className="skill-tags">
                {division.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-tag skill-tag-animated"
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </RevealSection>
          )}

          {division.members && division.members.length > 0 ? (
            <RevealSection>
              <h2>Meet the Team</h2>
              <TeamGrid members={division.members} />
            </RevealSection>
          ) : (
            <RevealSection>
              <p>Team information coming soon.</p>
            </RevealSection>
          )}
        </div>
      </section>
    </div>
  );
}
