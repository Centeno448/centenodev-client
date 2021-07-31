// English Strings
const ABOUT_EN = `About`;

const RESUME_EN = `Resume`;

const PROJECTS_EN = `Projects`;

const EN_STRINGS = {
  about: ABOUT_EN,
  resume: RESUME_EN,
  projects: PROJECTS_EN
};

// Spanish Strings
// English Strings
const ABOUT_ES = `Acerca de mí`;

const RESUME_ES = `Currículum`;

const PROJECTS_ES = `Proyectos`;

const ES_STRINGS = {
  about: ABOUT_ES,
  resume: RESUME_ES,
  projects: PROJECTS_ES
};

export function getHeaderStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}
