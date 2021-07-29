import './Home.css';
import DiegoImg from '../../assets/img/white.png';
import LinkedInLogo from '../../assets/img/LI-Bug-white.png';
import { Link } from 'react-router-dom';

const Home = () => {
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
            <h1 className="text-center text-white">Hello there!</h1>
            <p className="text-white">
              <b>
                My name is Diego Centeno and I'm a fullstack developer. I enjoy
                working on difficult problems and strive to deliver performant,
                maintainable and testable code.
              </b>
            </p>
            <p className="text-white">
              <b>
                Amittedly, I prefer to work on backend/devops solutions,
                however, I'm also proficient in frontend frameworks. Feel free
                to look at some of the projects I have contributed to and don't
                think twice about contacting me!
              </b>
            </p>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-md-4">
            <p className="text-white">
              <b>Email:</b>{' '}
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
            <button className="button">Resume</button>
          </Link>
          <Link className="col-md-2" to="/projects">
            <button className="button">Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
