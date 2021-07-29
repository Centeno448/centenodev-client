import { handleApiError } from './apiUtils';
import { BASE_URL } from './apiConfig';

export async function getAllAttachments(projectGuid) {
  const response = await fetch(
    `${BASE_URL}/projects/${projectGuid}/attachments`
  );

  return response;
}

export async function getAttachmentByGuid(projectGuid, attachmentGuid) {
  const response = await fetch(
    `${BASE_URL}/projects/${projectGuid}/attachments/${attachmentGuid}`
  );

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}
