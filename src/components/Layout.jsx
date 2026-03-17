import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { divisions, NEFS_LOGO } from "../data/teamData";

const divisionLinks = divisions.map((d) => ({
  to: `/division/${d.slug}`,
  label: d.name,
}));

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    label: "Our People",
    children: divisionLinks,
  },
  { to: "/sponsors", label: "Sponsors 2025/26" },
  { to: "/resources", label: "Resources" },
  { to: "/conference", label: "NEFS Conference" },
];

function Chevron() {
  return (
    <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <header className="site-header" role="banner">
        <nav className="nav-container" aria-label="Main navigation">
          <Link to="/" className="logo" aria-label="NEFS Home">
            <img src={NEFS_LOGO} alt="" className="logo-img" />
            <span className="logo-text">NEFS</span>
          </Link>

          <button
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="hamburger" />
          </button>

          <ul id="nav-menu" className={`nav-menu${menuOpen ? " open" : ""}`} role="menubar">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label} role="none" className="has-dropdown" ref={dropdownRef}>
                  <button
                    className="dropdown-toggle"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdownOpen((v) => !v);
                    }}
                  >
                    {item.label} <Chevron />
                  </button>
                  <ul
                    className={`dropdown${dropdownOpen ? " mobile-open" : ""}`}
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    {item.children.map((child) => (
                      <li key={child.to} role="none">
                        <NavLink to={child.to} role="menuitem">{child.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to} role="none">
                  <NavLink
                    to={item.to}
                    role="menuitem"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="logo-text">NEFS</span>
            <p>&copy; Nottingham Economics &amp; Finance Society 2025</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/conference">Conference</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Divisions</h4>
            <ul>
              {divisions.slice(0, 5).map((d) => (
                <li key={d.slug}>
                  <Link to={`/division/${d.slug}`}>{d.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            <h4>More</h4>
            <ul>
              {divisions.slice(5).map((d) => (
                <li key={d.slug}>
                  <Link to={`/division/${d.slug}`}>{d.name}</Link>
                </li>
              ))}
              <li><a href="mailto:admin@uonnefs.com">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
