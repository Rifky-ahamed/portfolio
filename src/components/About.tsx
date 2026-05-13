export function About() {
  return (
    <section
      id="about"
      className="border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              About
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Pragmatic builder with an eye for detail.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-8 lg:pt-1">
            <p>
              I am a full-stack leaning frontend engineer based in San
              Francisco. I enjoy turning complex problems into simple, elegant
              interfaces—whether that is a design system, a data-heavy dashboard,
              or a marketing site that needs to feel premium without noise.
            </p>
            <p>
              Outside of code, I mentor junior developers, contribute to open
              source when I can, and keep learning about typography, motion, and
              product thinking so engineering decisions stay aligned with user
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
