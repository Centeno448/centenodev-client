import './Projects.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as projectActions from '../../redux/actions/projectActions';
import { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FetchSpinner from '../Shared/FetchSpinner';

const Projects = ({ projects, error, loading, actions }) => {
  useEffect(() => {
    if (projects.length !== 0) return;

    actions.loadProjects();
  }, [actions, projects.length]);

  return (
    <>
      <div className="row">
        <h3>Projects</h3>
      </div>
      <div className="row">
        <p>Here's some of the projects i've colaborated on</p>
      </div>
      {loading ? (
        <>
          <FetchSpinner subject="projects" />
        </>
      ) : (
        <>
          <div className="row row-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.guid} project={project} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    error: state.projects.error,
    loading: state.projects.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
