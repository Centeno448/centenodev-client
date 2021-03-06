import './ProjectDetails.css';
import { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useState } from 'react';
import { connect } from 'react-redux';
import LessonDetails from './LessonDetails';
import AttachmentDetails from './AttachmentDetails';
import * as projectActions from '../../redux/actions/projectActions';
import FetchSpinner from '../Shared/FetchSpinner';
import { getProjectDetailsStrings } from './ProjectDetailsStrings';
import { useCallback } from 'react';

const ProjectDetails = ({
  projects,
  projectError,
  projectLoading,
  actions,
  language
}) => {
  let { guid } = useParams();
  const history = useHistory();

  const getProject = useCallback(() => {
    if (projects.length === 0) {
      actions.loadProjects();
    }

    if (projects.length > 0) {
      const project = projects.find((project) => project.guid === guid);

      if (!project) {
        history.push('/notfound');
        return;
      }

      return project;
    }
  }, [actions, guid, history, projects]);

  const [project, setProject] = useState(getProject());

  const getProjectDescriptionByLang = useCallback(
    (lang) => {
      return lang === 'EN' ? project.description_EN : project.description_ES;
    },
    [project.description_EN, project.description_ES]
  );

  const [projectDescription, setProjectDescription] = useState(
    getProjectDescriptionByLang(language)
  );

  const [projectDetailsStrings, setProjectDetailsStrings] = useState(
    getProjectDetailsStrings(language)
  );

  useEffect(() => {
    setProject(getProject());
  }, [getProject, guid, projects]);

  useEffect(() => {
    setProjectDetailsStrings(getProjectDetailsStrings(language));
    setProjectDescription(getProjectDescriptionByLang(language));
  }, [getProjectDescriptionByLang, language]);

  return (
    <>
      {projectLoading && <FetchSpinner subject="project details" />}
      {project && (
        <>
          <div className="shadow border border-dark rounded details-container">
            <div className="ps-3 pt-2 align-self-start">
              <Link to="/projects">
                <i className="bi bi-arrow-left-circle back-arrow"></i>
              </Link>
            </div>
            <div className="row px-5 pb-4 pt-2 justify-content-center">
              <div className="row text-white">
                <h2>{project.name}</h2>
              </div>

              <div className="row text-white">
                <p>{projectDescription}</p>
              </div>

              {(project.gitRepo || project.prodLink) && (
                <>
                  <div className="row text-white">
                    <h4>{projectDetailsStrings.links}</h4>
                  </div>
                  <div className="row text-white">
                    {project.gitRepo && (
                      <>
                        <p className="col-md-6">
                          {projectDetailsStrings.repo}:{' '}
                          <a
                            className="text-white"
                            rel="noreferrer"
                            href={project.gitRepo}
                            target="_blank"
                          >
                            {project.gitRepo}
                          </a>
                        </p>
                      </>
                    )}

                    {project.prodLink && (
                      <>
                        <p className="col-md-6 text-white">
                          {projectDetailsStrings.prod}:{' '}
                          <a
                            className="text-white"
                            rel="noreferrer"
                            href={project.prodLink}
                            target="_blank"
                          >
                            {project.prodLink}
                          </a>
                        </p>
                      </>
                    )}
                  </div>
                </>
              )}

              <LessonDetails project={project} />

              <AttachmentDetails project={project} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    projectError: state.projects.error,
    projectLoading: state.projects.loading,
    language: state.language.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
