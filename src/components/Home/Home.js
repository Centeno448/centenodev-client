import './Home.css';
import DiegoImg from '../../assets/img/white.png';
import LinkedInLogo from '../../assets/img/LI-Bug-white.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHomeStrings } from './HomeStrings';
import { useEffect, useState } from 'react';

const Home = ({ language }) => {
  const [homeStrings, setHomeStrings] = useState(getHomeStrings(language));

  useEffect(() => {
    setHomeStrings(getHomeStrings(language));
  }, [language]);

  return (
    <>
      <div className="info-container rounded">
        <div className="row justify-content-center">
          <div className="photo-container">
            <img className="profile-photo" alt="foto diego" src={DiegoImg} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 align-self-center">
            <h1 className="text-center text-white">{homeStrings.welcome}</h1>
            <p className="text-white">
              <b>{homeStrings.desc_1}</b>
            </p>
            <p className="text-white">
              <b>{homeStrings.desc_2}</b>
            </p>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-md-4">
            <p className="text-white">
              <b>{homeStrings.email}:</b>{' '}
              <a className="email-link" href="mailto:diegocenteno448@gmail.com">
                diegocenteno448@gmail.com
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <p className="text-white">
              <b>LinkedIn:</b>{' '}
              <a
                href="https://www.linkedin.com/in/diego-andres-centeno/"
                rel="noreferrer"
                target="_blank"
                className="align-self-center"
              >
                <img
                  src={LinkedInLogo}
                  alt="linked in logo"
                  className="social-logo"
                />
              </a>
            </p>
          </div>
        </div>

        <div className="row justify-content-center button-container text-center">
          <Link className="col-md-2" to="/resume">
            <button className="button">{homeStrings.resume}</button>
          </Link>
          <Link className="col-md-2" to="/projects">
            <button className="button">{homeStrings.projects}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    language: state.language.language
  };
}

export default connect(mapStateToProps)(Home);
