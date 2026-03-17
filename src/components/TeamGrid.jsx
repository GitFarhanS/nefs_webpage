export default function TeamGrid({ members }) {
  if (!members || members.length === 0) return null;

  return (
    <div className="team-grid">
      {members.map((m) => (
        <div className="team-member" key={m.name}>
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
