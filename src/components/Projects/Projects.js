import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <div className="row">
        <h3>Projects</h3>
      </div>
      <div className="row">
        <p>Here's some of the projects i've colaborated on</p>
      </div>
      <div className="row row-cols-4">
        <div className="col">
          <div className="card border border-dark">
            <Link className="no-link-style" to="/project/1">
              <div className="card-body">
                <h5 className="card-title text-center">Project 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique maiores, facilis libero ea nobis, sequi, qui eius
                  perferendis modi expedita facere recusandae natus eos
                  perspiciatis vero quaerat tempore nulla quae.
                </p>
              </div>
            </Link>
            <div className="card-body">
              <a
                href="https://google.com"
                rel="noreferrer"
                target="_blank"
                className="card-link"
              >
                Github repo
              </a>
              <a
                href="https://google.com"
                rel="noreferrer"
                target="_blank"
                className="card-link"
              >
                Production Url
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
