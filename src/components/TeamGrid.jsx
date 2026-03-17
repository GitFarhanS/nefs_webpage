import { useScrollReveal } from "./ScrollReveal";

export default function TeamGrid({ members }) {
  const ref = useScrollReveal();

  if (!members || members.length === 0) return null;

  return (
    <div className="team-grid" ref={ref}>
      {members.map((m, i) => (
        <div
          className="team-member reveal"
          key={m.name}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className="team-avatar">
            {m.image ? (
              <img src={m.image} alt={m.name} loading="lazy" />
            ) : (
              <span className="initials">
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            )}
          </div>
          <h3>{m.name}</h3>
          <p className="role">{m.role}</p>
        </div>
      ))}
    </div>
  );
}
