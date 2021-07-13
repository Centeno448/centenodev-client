import * as types from './actionTypes';
import { getAllProjects } from '../../api/projectApi';

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function loadProjectsFail(error) {
  return { type: types.LOAD_PROJECTS_FAIL, error };
}

export function loadProjects() {
  return async function (dispatch) {
    const response = await getAllProjects();

    if (!response || !response.ok) {
      const status = response ? response.status : 500;
      dispatch(loadProjectsFail(status));
      return;
    }

    const projects = await response.json();

    dispatch(loadProjectsSuccess(projects));
  };
}
