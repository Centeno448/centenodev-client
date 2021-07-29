import { handleApiError } from './apiUtils';
import { BASE_URL } from './apiConfig';

export async function getAllLessons(projectGuid) {
  const response = await fetch(`${BASE_URL}/projects/${projectGuid}/lessons`);

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}

export async function getLessonByGuid(projectGuid, lessonGuid) {
  const response = await fetch(
    `${BASE_URL}/projects/${projectGuid}/lessons/${lessonGuid}`
  );

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}
