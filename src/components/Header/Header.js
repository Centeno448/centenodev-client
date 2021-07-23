import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 nav-title">
            Diego Centeno
            <span className="nav-subtitle">Fullstack Developer</span>
          </span>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
