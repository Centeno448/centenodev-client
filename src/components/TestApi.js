import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as projectsActions from '../redux/actions/projectActions';
import { bindActionCreators } from 'redux';

const TestApi = ({ actions, projects, error }) => {
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    actions.loadProjects();
  }, [actions]);

  useEffect(() => {
    if (error) setFetchError('Something went wrong. Try again in a bit.');
    else setFetchError('');
  }, [error]);

  return (
    <>
      <h2>Projects</h2>
      {projects.map((project) => {
        return <p key={project.guid}>{project.name}</p>;
      })}
    </>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    error: state.projects.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(projectsActions.loadProjects, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestApi);
