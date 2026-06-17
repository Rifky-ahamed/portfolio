import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Content */}
          <div className="hero-content">
            <span className="hero-tagline">
              Creative Systems Developer
            </span>
            <h1 className="hero-title text-display">
              Building Digital Galaxies with <span className="glow-text-cyan">Precision</span> and <span className="glow-text-pink">Craft</span>.
            </h1>
            <p className="hero-description">
              I am <strong>Rifky Ahamed</strong>. I design and build high-performance, 
              interactive web applications and resilient system architectures 
              focused on sleek typography, spatial motions, and premium engineering.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-neon btn-neon-cyan">
                <span>Explore Projects</span>
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#contact" className="btn-neon btn-neon-outline">
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="hero-visual">
            <div className="hero-avatar-container">
              <Image
                src="/hero-avatar.png"
                alt="Rifky Ahamed Cosmic Avatar"
                className="hero-avatar-img"
                width={320}
                height={320}
                priority
              />
              <div className="hero-avatar-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
