import * as types from './actionTypes';
import { getAllLessons } from '../../api/lessonApi';

export function loadLessonsStart() {
  return { type: types.LOAD_LESSONS_START };
}

export function loadLessonsSuccess(lessons) {
  return { type: types.LOAD_LESSONS_SUCCESS, lessons };
}

export function loadLessonsFail(error) {
  return { type: types.LOAD_LESSONS_FAIL, error };
}

export function loadLessons(projectGuid) {
  return async function (dispatch) {
    dispatch(loadLessonsStart());

    const response = await getAllLessons(projectGuid);

    if (!response || !response.ok) {
      const status = response ? response.status : 500;
      console.log(status);
      dispatch(loadLessonsFail(status));
      return;
    }

    const lessons = await response.json();

    dispatch(loadLessonsSuccess(lessons));
  };
}
