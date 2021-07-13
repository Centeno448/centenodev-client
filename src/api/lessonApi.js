import { handleApiError } from './apiUtils';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

export async function getAllLessons(projectGuid) {
  const response = await fetch(`${baseUrl}/projects/${projectGuid}/lessons`);

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}

export async function getLessonByGuid(projectGuid, lessonGuid) {
  const response = await fetch(
    `${baseUrl}/projects/${projectGuid}/lessons/${lessonGuid}`
  );

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}
