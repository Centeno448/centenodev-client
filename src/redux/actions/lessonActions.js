import * as types from './actionTypes';

export function loadLessons() {
  return { type: types.LOAD_LESSONS };
}

export function loadLessonsSuccess(lessons) {
  return { type: types.LOAD_LESSONS_SUCCESS, lessons };
}

export function loadLessonsFail(error) {
  return { type: types.LOAD_LESSONS_FAIL, error };
}
