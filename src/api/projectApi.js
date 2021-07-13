import { handleApiError } from './apiUtils';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

export async function getAllProjects() {
  try {
    const response = await fetch(`${baseUrl}/projects`);
    return response;
  } catch (error) {
    return null;
  }
}

export async function getProjectByGuid(projectGuid) {
  const response = await fetch(`${baseUrl}/projects/${projectGuid}`);

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}
