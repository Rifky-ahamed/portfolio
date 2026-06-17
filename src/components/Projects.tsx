const projects = [
  {
    name: "Stellar Dashboard",
    description:
      "Real-time operational telemetry and status tracking for distributed nodes—featuring live orbital mapping, canvas rendering, and exportable reports.",
    stack: "Next.js · TypeScript · PostgreSQL · Chart.js",
    href: "#",
  },
  {
    name: "Nebula Design Protocol",
    description:
      "A futuristic, tokenized design system and interactive component library engineered for speed, responsiveness, and seamless access standards.",
    stack: "React · CSS Modules · Storybook · Figma",
    href: "#",
  },
  {
    name: "Quantum Portal",
    description:
      "Ultra-fast, headless commerce gateway utilizing Edge middleware, optimistic state reconciliation, and payment validations. Average latency below 120ms.",
    stack: "Next.js · Stripe · Cloudflare Edge",
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <span className="section-label">Selected Launch Logs</span>
            <h2 className="section-heading text-display">
              Featured <span className="glow-text-pink">Projects</span>
            </h2>
          </div>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", maxWidth: "400px" }}>
            Exploring new frontiers in frontend engineering, real-time telemetry, and latency tuning.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.name}
              className="glass-panel project-card"
            >
              <h3 className="project-name text-display">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-stack">{project.stack}</p>
              <a
                href={project.href}
                className="project-link"
              >
                <span>Launch Project</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
