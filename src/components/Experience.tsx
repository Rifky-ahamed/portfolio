const roles = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer",
    company: "Northwind Labs",
    detail:
      "Lead UI architecture for the flagship SaaS product. Shipped a new app shell, reduced LCP by 38%, and established accessibility baselines with the design team.",
  },
  {
    period: "2022 — 2024",
    title: "Software Engineer (Full stack)",
    company: "Harbor Health",
    detail:
      "Built patient-facing portals and internal tooling in React and Node. Owned billing integrations and mentored two interns through production launches.",
  },
  {
    period: "Summer 2021",
    title: "Engineering Intern",
    company: "Cedar Analytics",
    detail:
      "Implemented data visualizations and API clients for a summer cohort project; presented findings to leadership and shipped one feature to production.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Roles that shaped how I build.
          </p>
        </div>
        <ol className="mt-12 space-y-6">
          {roles.map((role) => (
            <li
              key={role.title + role.company}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted">{role.company}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-muted">
                  {role.period}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {role.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
