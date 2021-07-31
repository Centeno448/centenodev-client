// English Strings
const LESSONS_EN = `Lessons Learned`;

const FETCH_ERROR_EN = `Could not fetch lessons. Please refresh the page.`;

const EN_STRINGS = {
  lessons: LESSONS_EN,
  fetchError: FETCH_ERROR_EN
};

// Spanish Strings
const LESSONS_ES = `Lecciones Aprendidas`;

const FETCH_ERROR_ES = `Ocurrió un error al obtener las lecciones. Por favor, refresca la página.`;

const ES_STRINGS = {
  lessons: LESSONS_ES,
  fetchError: FETCH_ERROR_ES
};

export function getLessonDetailsStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}
