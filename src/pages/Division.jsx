import { useParams, Navigate } from "react-router-dom";
import { divisions } from "../data/teamData";
import TeamGrid from "../components/TeamGrid";

export default function Division() {
  const { slug } = useParams();
  const division = divisions.find((d) => d.slug === slug);

  if (!division) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>{division.name}</h1>
          <p>{division.shortDesc}</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>About This Division</h2>
          <p>{division.description}</p>

          {division.skills && division.skills.length > 0 && (
            <>
              <h2>What You'll Learn</h2>
              <div className="skill-tags">
                {division.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </>
          )}

          {division.members && division.members.length > 0 ? (
            <>
              <h2>Meet the Team</h2>
              <TeamGrid members={division.members} />
            </>
          ) : (
            <p>Team information coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
