import './ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="col">
        <div className="card border border-dark">
          <Link className="no-link-style" to={`/project/${project.guid}`}>
            <div className="card-body">
              <h5 className="card-title text-white text-center">
                {project.name}
              </h5>
              <p className="card-text text-white">{project.description}</p>
            </div>
          </Link>

          {(project.gitRepo || project.prodLink) && (
            <div className="card-body text-white">
              {project.gitRepo && (
                <a
                  href={project.gitRepo}
                  rel="noreferrer"
                  target="_blank"
                  className="card-link text-white"
                >
                  Github repo
                </a>
              )}

              {project.prodLink && (
                <a
                  href={project.prodLink}
                  rel="noreferrer"
                  target="_blank"
                  className="card-link"
                >
                  Production Url
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
