const skillGroups = [
  {
    title: "Core Frontend",
    items: ["React", "Next.js", "TypeScript", "Vanilla CSS", "CSS Modules", "HTML5", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Redis", "Serverless", "Prisma"],
  },
  {
    title: "Workflow & Exploration",
    items: ["Git & CI/CD", "Docker", "WebGL / Three.js", "SEO Audits", "Figma", "Performance Tuning"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title-container">
          <span className="section-label">Command Center</span>
          <h2 className="section-heading text-display">
            Technical <span className="glow-text-cyan">Capabilities</span> & Stack
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-panel skills-card"
            >
              <h3>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-cyan)",
                    boxShadow: "0 0 8px var(--color-cyan)",
                  }}
                />
                {group.title}
              </h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
