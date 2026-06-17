"use client";

import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate successful message transfer
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="glass-panel contact-form-container">
          <div className="contact-grid">
            {/* Contact Details */}
            <div className="contact-info">
              <span className="section-label">Establish Link</span>
              <h2 className="section-heading text-display" style={{ marginBottom: "1.5rem" }}>
                Initiate <span className="glow-text-cyan">Contact</span>
              </h2>
              <p className="contact-desc">
                Have an inquiry or an ambitious system to architecture? 
                Transmit your project specs, timelines, or role requests below.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-item-label">Direct Channel</span>
                  <span className="contact-item-value">
                    <a href="mailto:hello@rifkyahamed.com">hello@rifkyahamed.com</a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-label">Coordinates</span>
                  <span className="contact-item-value">
                    Colombo, Sri Lanka (GMT +5:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Identity
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Name / Organization"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Frequency / Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="name@agency.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Transmission Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Details regarding your timeline, stack, or project specs..."
                />
              </div>
              <button
                type="submit"
                className="btn-neon btn-neon-cyan"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Transmit Signal</span>
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
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {submitted && (
        <div className="toast-notification">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-cyan)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>
            Transmission sent successfully.
          </span>
        </div>
      )}
    </section>
  );
}
