import './Header.css';

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
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
