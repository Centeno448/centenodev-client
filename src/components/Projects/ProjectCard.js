import './ProjectCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjectCardStrings } from './ProjectCardStrings';

const ProjectCard = ({ project, language }) => {
  function getDescriptionByLang(lang) {
    return lang === 'EN' ? project.description_EN : project.description_ES;
  }

  const [projectDescription, setProjectDescription] = useState(
    getDescriptionByLang(language)
  );

  const [projectCardStrings, setProjectCardStrings] = useState(
    getProjectCardStrings(language)
  );

  useEffect(() => {
    setProjectDescription(getDescriptionByLang(language));
    setProjectCardStrings(getProjectCardStrings(language));
  }, [language]);

  return (
    <>
      <div className="col">
        <div className="card border border-dark">
          <Link className="no-link-style" to={`/project/${project.guid}`}>
            <div className="card-body">
              <h5 className="card-title text-white text-center">
                {project.name}
              </h5>
              <p className="card-text text-white">{projectDescription}</p>
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
                  {projectCardStrings.repo}
                </a>
              )}

              {project.prodLink && (
                <a
                  href={project.prodLink}
                  rel="noreferrer"
                  target="_blank"
                  className="card-link text-white"
                >
                  {projectCardStrings.prod}
                </a>
              )}
            </div>
          )}
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

export default connect(mapStateToProps)(ProjectCard);
