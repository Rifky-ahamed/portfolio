"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[box-shadow,background-color] duration-200 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="shrink-0 text-sm font-semibold tracking-tight text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          Alex Chen
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-muted-bg hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 sm:inline-flex dark:text-stone-950"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-foreground transition-transform duration-200 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-foreground transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-foreground transition-transform duration-200 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
      <div
        id="mobile-nav"
        className={`border-b border-border bg-background/95 backdrop-blur-md md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted-bg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-1 sm:hidden">
            <a
              href="#contact"
              className="block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white dark:text-stone-950"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
