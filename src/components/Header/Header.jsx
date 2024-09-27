import { Link } from 'react-router-dom'
import "./header.css";

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <h1 className="logo-text">MUTC</h1>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-item">
            <Link to="/" className="navigation-link">
              home
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/Leadership" className="navigation-link">
              leadership
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/Tracks" className="navigation-link">
              tracks
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/Events" className="navigation-link">
              events
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <HeaderNavigation />
    </header>
  );
}
export default Header;
