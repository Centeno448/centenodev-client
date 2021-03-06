import './Projects.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as projectActions from '../../redux/actions/projectActions';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import FetchSpinner from '../Shared/FetchSpinner';
import { getProjectsStrings } from './ProjectsStrings';

const Projects = ({ projects, error, loading, actions, language }) => {
  const [projectsStrings, setProjectsStrings] = useState(
    getProjectsStrings(language)
  );

  useEffect(() => {
    if (projects.length !== 0) return;

    actions.loadProjects();
  }, [actions, projects.length]);

  useEffect(() => {
    setProjectsStrings(getProjectsStrings(language));
  }, [language]);

  return (
    <>
      <div className="row">
        <h3 className="text-white">{projectsStrings.projects}</h3>
      </div>
      <div className="row">
        <p className="text-white">{projectsStrings.intro}</p>
      </div>
      {loading ? (
        <>
          <FetchSpinner subject="projects" />
        </>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
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
    loading: state.projects.loading,
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
