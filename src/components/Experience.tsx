const roles = [
  {
    period: "2024 — Present",
    title: "Lead Systems & UI Architect",
    company: "Stellar Labs",
    detail:
      "Direct UI architecture and layout specifications for enterprise SaaS frameworks. Integrated real-time monitoring portals, trimmed Largest Contentful Paint by 38%, and set strict accessibility performance metrics.",
  },
  {
    period: "2022 — 2024",
    title: "Software Engineer (Full Stack)",
    company: "Nebula Systems",
    detail:
      "Crafted secure patient messaging systems and dashboard tooling using Next.js and Node.js. Supervised checkout/billing flows, scaled data ingestion channels, and mentored multiple junior developers.",
  },
  {
    period: "Summer 2021",
    title: "Software Engineer Intern",
    company: "Comet Analytics",
    detail:
      "Built interactive data visualization charting engines and backend APIs. Streamlined search query metrics and designed automated testing suites for analytics portals.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title-container">
          <span className="section-label">Timeline of Events</span>
          <h2 className="section-heading text-display">
            Professional <span className="glow-text-cyan">Trajectory</span>
          </h2>
        </div>

        <div className="timeline">
          {roles.map((role) => (
            <div
              key={role.title + role.company}
              className="timeline-item"
            >
              <div className="timeline-node" aria-hidden="true" />
              <div className="glass-panel timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title text-display">{role.title}</h3>
                    <span className="timeline-company">{role.company}</span>
                  </div>
                  <span className="timeline-period">{role.period}</span>
                </div>
                <p className="timeline-details">{role.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
