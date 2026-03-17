export default function Conference() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>NEFS Conference</h1>
          <p>Our flagship annual event bringing together students and industry professionals.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>About the Conference</h2>
          <p>
            The NEFS Conference brings together leading professionals from finance, consulting, and economics to share insights, inspire students, and create meaningful connections.
          </p>

          <h2>What to Expect</h2>
          <ul className="content-list">
            <li>Keynote speeches</li>
            <li>Panel discussions</li>
            <li>Networking sessions</li>
            <li>Interactive workshops</li>
            <li>Career fair</li>
          </ul>

          <h2>Past Conferences</h2>
          <p>
            Our past conferences have featured speakers from Goldman Sachs, J.P. Morgan, Bank of England, McKinsey, and other leading institutions.
          </p>

          <h2>Women in Finance Conference 2024</h2>
          <p>
            In 2024, NEFS launched its inaugural Women in Finance Conference themed "Empower and Inspire". The event attracted over 100 students from multiple universities, featuring panels on Alternative Careers, Business & Entrepreneurship, and Corporate Finance.
          </p>

          <h2>Stay Informed</h2>
          <p>
            Follow us on social media for updates on upcoming conference dates, speakers, and registration.
          </p>

          <div className="hero-actions">
            <a
              href="https://www.instagram.com/uon_nefs/"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/nottingham-economics-finance-society/"
              className="btn btn-outline-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
