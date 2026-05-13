const projects = [
  {
    name: "Atlas Dashboard",
    description:
      "Operational analytics for logistics teams—real-time maps, saved views, and exportable reports.",
    stack: "Next.js · TypeScript · PostgreSQL",
    href: "#",
  },
  {
    name: "Northwind Design System",
    description:
      "Component library and documentation used across three products, with tokens and accessibility baked in.",
    stack: "React · Storybook · Tailwind",
    href: "#",
  },
  {
    name: "Lumen Checkout",
    description:
      "Headless commerce flow with optimistic UI, Apple Pay, and fraud checks—sub-200ms perceived latency.",
    stack: "Next.js · Stripe · Edge",
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Projects
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Selected work from recent roles.
            </p>
          </div>
          <p className="max-w-md text-sm text-muted">
            Replace summaries and links with your own case studies or live demos.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-4 font-mono text-xs text-muted">{project.stack}</p>
              <a
                href={project.href}
                className="mt-6 inline-flex text-sm font-medium text-accent transition-opacity group-hover:opacity-80"
              >
                View details →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
