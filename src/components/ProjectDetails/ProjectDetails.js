import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as projectActions from '../../redux/actions/projectActions';
import * as attachmentActions from '../../redux/actions/attachmentActions';
import * as lessonActions from '../../redux/actions/lessonActions';
import { bindActionCreators } from 'redux';
import { useState } from 'react';
import { connect } from 'react-redux';
import FetchSpinner from '../Shared/FetchSpinner';

const ProjectDetails = ({
  projects,
  projectError,
  projectLoading,
  attachments,
  attachmentError,
  attachmentLoading,
  lessons,
  lessonError,
  lessonLoading,
  actions
}) => {
  let { guid } = useParams();
  const [project, setProject] = useState();
  const history = useHistory();

  useEffect(() => {
    if (projects.length === 0) {
      actions.loadProjects();
    }

    if (projects.length > 0) {
      const project = projects.find((project) => project.guid === guid);

      if (!project) {
        history.push('/notfound');
        return;
      }

      setProject(project);
    }
  }, [guid, projects, actions, history]);

  useEffect(() => {
    if (project) {
      actions.loadLessons(guid);
      actions.loadAttachments(guid);
    }
  }, [project, actions, guid]);

  return (
    <>
      {project && (
        <>
          <div className="p-5 shadow border border-dark rounded bg-light">
            <div className="row">
              <h2>{project.name}</h2>
            </div>
            <div className="row">
              {project.gitRepo && (
                <>
                  <p className="col-md-6">
                    Github repo:{' '}
                    <a rel="noreferrer" href={project.gitRepo} target="_blank">
                      {project.gitRepo}
                    </a>
                  </p>
                </>
              )}

              {project.prodLink && (
                <>
                  <p className="col-md-6">
                    Production Url:{' '}
                    <a rel="noreferrer" href={project.prodLink} target="_blank">
                      {project.prodLink}
                    </a>
                  </p>
                </>
              )}
            </div>
            <div className="row">
              <p>{project.description}</p>
            </div>

            <div className="row">
              <h3>Lessons Learned</h3>
            </div>
            <div className="row">
              {lessonLoading ? (
                <FetchSpinner subject="lessons" />
              ) : (
                <ul>
                  {lessons.map((lesson) => (
                    <li key={lesson.guid}>{lesson.content}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="row">
              <h3>Attachments</h3>
            </div>
            <div className="row">
              {attachmentLoading ? (
                <FetchSpinner subject="attachments" />
              ) : (
                <ul>
                  {attachments.map((attachment) => (
                    <li key={attachment.guid}>
                      <a href={attachment.url} rel="noreferrer" target="_blank">
                        {attachment.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
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
    lessons: state.lessons.lessons,
    lessonError: state.lessons.error,
    lessonLoading: state.lessons.loading,
    attachments: state.attachments.attachments,
    attachmentError: state.attachments.error,
    attachmentLoading: state.attachments.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch),
      loadAttachments: bindActionCreators(
        attachmentActions.loadAttachments,
        dispatch
      ),
      loadLessons: bindActionCreators(lessonActions.loadLessons, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
