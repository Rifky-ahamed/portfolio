"use client";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s build something refined together.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I am open to senior frontend roles, freelance partnerships, and
              thoughtful collaborations. Tell me about your timeline, stack,
              and what success looks like.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p>
                <span className="text-muted">Email</span>
                <br />
                <a
                  href="mailto:hello@alexchen.dev"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  hello@alexchen.dev
                </a>
              </p>
              <p>
                <span className="text-muted">Location</span>
                <br />
                <span className="font-medium text-foreground">
                  San Francisco, CA (Pacific Time)
                </span>
              </p>
            </div>
          </div>
          <form
            className="flex flex-col gap-4"
            action="#"
            method="post"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-wide text-muted"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-accent/0 transition-[box-shadow,border-color] focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wide text-muted"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-[box-shadow,border-color] focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-wide text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1.5 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-[box-shadow,border-color] focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="A few lines about your project or role…"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 dark:text-stone-950"
            >
              Send message
            </button>
            <p className="text-xs text-muted">
              This form is static for the demo—wire it to your API or form
              provider when you deploy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
