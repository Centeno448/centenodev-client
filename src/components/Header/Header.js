import './Header.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as languageActions from '../../redux/actions/languageActions';
import { Link } from 'react-router-dom';
import { getHeaderStrings } from './HeaderStrings';
import { useState, useEffect } from 'react';

const Header = ({ language, actions }) => {
  const [headerStrings, setHeaderStrings] = useState(
    getHeaderStrings(language)
  );

  useEffect(() => {
    setHeaderStrings(getHeaderStrings(language));
  }, [language]);

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 nav-title">
            Diego Centeno
            <span className="nav-subtitle">Fullstack Developer</span>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBarContent"
            aria-controls="navBarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navBarContent"
          >
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle lang-dropdown"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language}
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      onClick={() => actions.setLanguage('EN')}
                      className="dropdown-item lang-option"
                    >
                      EN
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => actions.setLanguage('ES')}
                      className="dropdown-item lang-option"
                    >
                      ES
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {headerStrings.about}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="resume">
                  {headerStrings.resume}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects">
                  {headerStrings.projects}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

function mapStateToProps(state) {
  return {
    language: state.language.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setLanguage: bindActionCreators(languageActions.setLanguage, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
