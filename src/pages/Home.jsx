import { Link } from "react-router-dom";
import { divisions, HOMEPAGE_BG } from "../data/teamData";
import DivisionIcon from "../components/Icons";
import AnimatedCounter from "../components/AnimatedCounter";
import Particles from "../components/Particles";
import { useScrollReveal, RevealSection } from "../components/ScrollReveal";

export default function Home() {
  const joinUrl = "https://su.nottingham.ac.uk/shop?activity_id=339&category_id=2";
  const statsRef = useScrollReveal();
  const divisionsRef = useScrollReveal();

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,31,61,0.9) 0%, rgba(26,58,107,0.85) 50%, rgba(38,77,142,0.9) 100%), url(${HOMEPAGE_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Particles />
        <div className="hero-content hero-entrance">
          <h1 className="hero-title-animated">
            Nottingham Economics &amp; Finance Society
          </h1>
          <p className="hero-subtitle hero-fade-up" style={{ animationDelay: "0.2s" }}>
            The largest society at the University of Nottingham — empowering students since 1975.
          </p>
          <div className="hero-actions hero-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href={joinUrl}
              className="btn btn-primary btn-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </a>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="stats" aria-label="NEFS in Numbers">
        <div className="container" ref={statsRef}>
          <RevealSection>
            <h2 className="section-title">NEFS in Numbers</h2>
          </RevealSection>
          <div className="stats-grid">
            {[
              { target: 4000, suffix: "+", label: "Members", desc: "Largest society at the University of Nottingham" },
              { target: 70, suffix: "+", label: "Events", desc: "Hosted more than 70 events in the 2024/25 academic year" },
              { target: 8, suffix: "", label: "Specialised Divisions", desc: "Focused on training our members to excel in their chosen field" },
              { target: 50, suffix: "", label: "Years of History", desc: "First UoN Economics Society established in 1975" },
            ].map((s, i) => (
              <div className="stat-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={s.label}>
                <AnimatedCounter target={s.target} suffix={s.suffix} />
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Our Divisions">
        <div className="container" ref={divisionsRef}>
          <RevealSection>
            <h2 className="section-title">Our Divisions</h2>
            <p className="section-desc">
              Eight specialised divisions focused on developing skills and knowledge across finance, economics, and beyond.
            </p>
          </RevealSection>
          <div className="divisions-grid">
            {divisions.map((d, i) => (
              <Link
                key={d.slug}
                to={`/division/${d.slug}`}
                className="division-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="division-icon">
                  <DivisionIcon name={d.icon} />
                </div>
                <h3>{d.name}</h3>
                <p>{d.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RevealSection>
        <section className="cta">
          <div className="container">
            <h2>Ready to join the largest society at UoN?</h2>
            <p>
              Whether you study economics, finance, or something else entirely — NEFS has a place for you.
            </p>
            <a
              href={joinUrl}
              className="btn btn-primary btn-lg btn-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join NEFS Today
            </a>
          </div>
        </section>
      </RevealSection>

      <section className="contact" id="contact">
        <div className="container">
          <RevealSection>
            <h2 className="section-title">Contact Us</h2>
            <p>Have a question? Get in touch with us.</p>
            <a href="mailto:admin@uonnefs.com" className="contact-email">
              admin@uonnefs.com
            </a>
            <div className="social-links">
              <a href="https://www.instagram.com/uon_nefs/" target="_blank" rel="noopener noreferrer" aria-label="NEFS on Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/nottingham-economics-finance-society/" target="_blank" rel="noopener noreferrer" aria-label="NEFS on LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://x.com/UoN_NEFS" target="_blank" rel="noopener noreferrer" aria-label="NEFS on X">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
