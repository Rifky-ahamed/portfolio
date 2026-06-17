export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title-container">
          <span className="section-label">Origin & Mission</span>
          <h2 className="section-heading text-display">
            Engineering with <span className="glow-text-pink">Curiosity</span> and <span className="glow-text-cyan">Logic</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left Text */}
          <div className="about-text">
            <p>
              I am a full-stack creative developer obsessed with creating high-fidelity, 
              interactive user interfaces and scaling robust, clean application architectures. 
              My development stack revolves around the React, Next.js, and TypeScript ecosystems, 
              paired with modern database structures.
            </p>
            <p>
              Drawing inspiration from science fiction, cosmic geometries, and dark UI designs, 
              I design websites that feel premium and alive. I pay meticulous attention to micro-interactions, 
              loading states, and accessibility, ensuring each build is visually stunning and accessible to everyone.
            </p>
            <p>
              Outside of coding, I focus on optimizing bundler architectures, playing with WebGL/Three.js, 
              and exploring the frontiers of decentralized systems and space science.
            </p>
          </div>

          {/* Right Stats Cards */}
          <div className="about-stats">
            <div className="glass-panel stat-card">
              <span className="stat-number text-display">3+</span>
              <span className="stat-label">Years of Orbit</span>
            </div>
            <div className="glass-panel stat-card">
              <span className="stat-number text-display">25+</span>
              <span className="stat-label">Systems Launched</span>
            </div>
            <div className="glass-panel stat-card">
              <span className="stat-number text-display">99%</span>
              <span className="stat-label">LCP Optimizations</span>
            </div>
            <div className="glass-panel stat-card">
              <span className="stat-number text-display">100%</span>
              <span className="stat-label">Cosmic Craft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
