export default function Resources() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Resources</h1>
          <p>Guides, materials, and tools to support your career journey in economics and finance.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <h2>Career Guides</h2>
          <p>
            Explore our curated guides across key sectors to understand career paths, application processes, and industry insights.
          </p>
          <ul className="content-list">
            <li>Investment Banking</li>
            <li>Asset Management</li>
            <li>Management Consulting</li>
            <li>Quantitative Finance</li>
            <li>Private Equity & VC</li>
            <li>Economic Research</li>
          </ul>

          <h2>Technical Resources</h2>
          <p>
            Build your technical skills with frameworks, templates, and learning materials from our divisions.
          </p>
          <ul className="content-list">
            <li><strong>Financial Modelling</strong> — Excel/Python templates for DCF, LBO</li>
            <li><strong>Market Analysis</strong> — Frameworks from Research division</li>
            <li><strong>Quantitative Skills</strong> — Stats, econometrics, algo trading</li>
            <li><strong>Case Study Prep</strong> — Consulting frameworks</li>
          </ul>

          <h2>Weekly Newsletter</h2>
          <p>
            Stay informed with our Market Wrap Up newsletter, featuring analysis and insights from our Research division covering global markets.
          </p>

          <a
            href="https://su.nottingham.ac.uk/shop?activity_id=339&category_id=2"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join NEFS
          </a>
        </div>
      </section>
    </>
  );
}
