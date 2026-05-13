export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Alex Chen. Crafted with Next.js and
          Tailwind CSS.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com"
            className="text-muted transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="text-muted transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@alexchen.dev"
            className="text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
