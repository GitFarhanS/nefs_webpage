import { Link } from "react-router-dom";
import { ABOUT_HERO } from "../data/teamData";

export default function About() {
  const joinUrl = "https://su.nottingham.ac.uk/shop?activity_id=339&category_id=2";

  return (
    <>
      <section className="page-header" style={{ backgroundImage: `linear-gradient(135deg, rgba(15,31,61,0.9) 0%, rgba(26,58,107,0.85) 100%), url(${ABOUT_HERO})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <h1>About Us</h1>
          <p>Discover who we are and what we stand for.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            NEFS was established in 1975 as the first Economics Society at the University of Nottingham. Today, we are the largest society at the university with over 4,000 members, empowering students to excel in economics, finance, and beyond.
          </p>

          <h2>Our Mission</h2>
          <p>
            We bridge the gap between academic learning and industry, providing opportunities for networking, skill development, and career guidance. Our members gain hands-on experience through specialised divisions, workshops, and events led by industry professionals.
          </p>

          <h2>What We Offer</h2>
          <ul className="content-list">
            <li><strong>Networking events</strong> — Connect with industry professionals and build your professional network.</li>
            <li><strong>Skills workshops</strong> — Develop technical skills in financial modelling, valuation, and more.</li>
            <li><strong>Speaker series</strong> — Learn from experts across finance, consulting, and economics.</li>
            <li><strong>Competitions</strong> — Test your skills in trading, case studies, and research.</li>
            <li><strong>Social events</strong> — Build lasting friendships within our community.</li>
          </ul>

          <h2>Our Core Values</h2>
          <p>
            <strong>Diversity:</strong> NEFS has built a diverse and inclusive community, welcoming ambitious students from all degrees, disciplines, and backgrounds.
          </p>
          <p>
            <strong>Giving Back:</strong> Through our mentorship scheme, career clinics, and peer-led events, we encourage members to learn from those who preceded them.
          </p>
          <p>
            <strong>Excellence:</strong> More than 93% of Nottingham students are in work or further study 15 months after graduating. NEFS members in 2024/25 secured 200+ spring, summer and graduate offers.
          </p>

          <div className="hero-actions">
            <a
              href={joinUrl}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join NEFS
            </a>
            <Link to="/#contact" className="btn btn-outline-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
