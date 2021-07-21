import './Home.css';
import DiegoImg from '../assets/img/white.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="profile-container">
        <h1>Diego Centeno</h1>
        <h2>Fullstack Developer</h2>
        <div className="profile-photo-container">
          <img className="profile-photo" alt="foto diego" src={DiegoImg} />
        </div>
      </div>

      <div className="info-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia,
          minima provident optio praesentium nesciunt veritatis error minus
          libero facere. Nostrum assumenda eaque incidunt nulla ea deleniti
          voluptate consectetur dolores?
        </p>
      </div>

      <div className="lenguage-container">
        <div className="language-title">
          <h3>Lenguages</h3>
        </div>
        <ul className="language-list">
          <li>C#</li>
          <li>Java</li>
          <li>Javascript</li>
        </ul>
      </div>

      <div className="framework-container">
        <div className="framework-title">
          <h3>Frameworks</h3>
        </div>
        <ul className="framework-list">
          <li>React</li>
          <li>Angular</li>
          <li>.Net Core</li>
        </ul>
      </div>

      <div className="projects-container">
        <h3>Projects</h3>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div class="item">
            <h4>1</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              odit excepturi eum blan
            </p>
          </div>
          <div class="item">
            <h4>2</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              odit excepturi eum bland
            </p>
          </div>
          <div class="item">
            <h4>3</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              odit excepturi eum
            </p>
          </div>
        </OwlCarousel>
        <Link to="/project/1">View all projects</Link>
      </div>
    </>
  );
};

export default Home;
