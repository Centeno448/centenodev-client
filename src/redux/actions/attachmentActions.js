import * as types from './actionTypes';
import { getAllAttachments } from '../../api/attachmentApi';

export function loadAttachmentStart() {
  return { type: types.LOAD_ATTACHMENTS_START };
}

export function loadAttachmentsSuccess(attachments) {
  return { type: types.LOAD_ATTACHMENTS_SUCCESS, attachments };
}

export function loadAttachmentsFail(error) {
  return { type: types.LOAD_ATTACHMENTS_FAIL, error };
}

export function loadAttachments(projectGuid) {
  return async function (dispatch) {
    dispatch(loadAttachmentStart());

    const response = await getAllAttachments(projectGuid);

    if (!response.ok) {
      dispatch(loadAttachmentsFail(response.status));
      return;
    }

    const attachments = await response.json();

    dispatch(loadAttachmentsSuccess(attachments));
  };
}
