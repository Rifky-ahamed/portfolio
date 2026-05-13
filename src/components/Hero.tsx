export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent-soft blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent-soft blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Software engineer
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          Building thoughtful web experiences with clarity and craft.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          I design and ship resilient frontends, polished interfaces, and APIs
          that scale—focused on performance, accessibility, and calm UX.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 dark:text-stone-950"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent/40 hover:bg-muted-bg"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
