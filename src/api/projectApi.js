import { handleApiError } from './apiUtils';
import { BASE_URL } from './apiConfig';

export async function getAllProjects() {
  try {
    const response = await fetch(`${BASE_URL}/projects`);
    return response;
  } catch (error) {
    return null;
  }
}

export async function getProjectByGuid(projectGuid) {
  const response = await fetch(`${BASE_URL}/projects/${projectGuid}`);

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}
