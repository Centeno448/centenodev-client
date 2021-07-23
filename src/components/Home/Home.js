import './Home.css';
import DiegoImg from '../../assets/img/white.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="photo-container">
          <img className="profile-photo" alt="foto diego" src={DiegoImg} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 align-self-center">
          <h1 className="text-center">Hello there!</h1>
          <p>
            <b>
              My name is Diego Centeno and I'm a fullstack developer. I enjoy
              working on difficult problems and strive to deliver performant,
              maintainable and testable code.
            </b>
          </p>
          <p>
            <b>
              Amittedly, I prefer to work on backend/devops solutions, however,
              I'm also proficient in frontend frameworks. Feel free to look at
              some of the projects I have contributed to and don't think twice
              about contacting me!
            </b>
          </p>
        </div>
      </div>

      <div className="row justify-content-center button-container">
        <Link className="col-md-1" to="/resume">
          <button className="button">Resume</button>
        </Link>
        <Link className="col-md-1" to="/projects">
          <button className="button">Projects</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
