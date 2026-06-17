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
    <header className={`navbar-header ${scrolled ? "scrolled" : "transparent"}`}>
      <nav className="navbar-container">
        <a
          href="#hero"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          Rifky Ahamed
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="#contact"
            className="btn-neon btn-neon-cyan"
            onClick={() => setMenuOpen(false)}
            style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
          >
            Let&apos;s talk
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span style={{ position: "relative", display: "block", width: "16px", height: "12px" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: menuOpen ? "5px" : 0,
                  display: "block",
                  height: "2px",
                  width: "100%",
                  borderRadius: "99px",
                  background: "currentColor",
                  transition: "transform 0.2s, top 0.2s",
                  transform: menuOpen ? "rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "5px",
                  display: "block",
                  height: "2px",
                  width: "100%",
                  borderRadius: "99px",
                  background: "currentColor",
                  transition: "opacity 0.2s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: menuOpen ? "5px" : "10px",
                  display: "block",
                  height: "2px",
                  width: "100%",
                  borderRadius: "99px",
                  background: "currentColor",
                  transition: "transform 0.2s, top 0.2s",
                  transform: menuOpen ? "rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`mobile-nav-panel ${menuOpen ? "open" : ""}`}
      >
        <ul className="mobile-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ padding: "0.5rem 0.8rem" }}>
            <a
              href="#contact"
              className="btn-neon btn-neon-cyan"
              style={{ display: "flex", justifyContent: "center", width: "100%" }}
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
