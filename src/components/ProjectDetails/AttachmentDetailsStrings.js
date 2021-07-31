// English Strings
const ATTACHMENTS_EN = `Attachments`;

const FETCH_ERROR_EN = `Could not fetch attachments. Please refresh the page.`;

const EN_STRINGS = {
  attachments: ATTACHMENTS_EN,
  fetchError: FETCH_ERROR_EN
};

// Spanish Strings
const ATTACHMENTS_ES = `Adjuntos`;

const FETCH_ERROR_ES = `Ocurrió un error al obtener los adjuntos. Por favor, refresca la página.`;

const ES_STRINGS = {
  attachments: ATTACHMENTS_ES,
  fetchError: FETCH_ERROR_ES
};

export function getAttachmentDetailsStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}
