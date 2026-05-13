const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "PostgreSQL", "REST", "GraphQL", "Redis"],
  },
  {
    title: "Practices",
    items: ["Testing", "CI/CD", "Accessibility", "Performance", "Design systems"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Skills & technologies
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Tools I reach for to ship reliable products.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-border bg-muted-bg px-3 py-1 text-xs font-medium text-foreground">
                      {item}
                    </span>
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
