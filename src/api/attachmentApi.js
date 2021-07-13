import { handleApiError } from './apiUtils';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

export async function getAllAttachments(projectGuid) {
  const response = await fetch(
    `${baseUrl}/projects/${projectGuid}/attachments`
  );

  return response;
}

export async function getAttachmentByGuid(projectGuid, attachmentGuid) {
  const response = await fetch(
    `${baseUrl}/projects/${projectGuid}/attachments/${attachmentGuid}`
  );

  if (!response.ok) {
    handleApiError(response);
  }

  return await response.json();
}
