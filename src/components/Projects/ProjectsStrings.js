// English Strings
const PROJECTS_EN = `Projects`;

const INTRO_EN = `Here's some of the projects i've colaborated on`;

const EN_STRINGS = {
  projects: PROJECTS_EN,
  intro: INTRO_EN
};

// Spanish Strings
const PROJECTS_ES = `Proyectos`;

const INTRO_ES = `Estos son algunos de los proyectos a los que he contribuido`;

const ES_STRINGS = {
  projects: PROJECTS_ES,
  intro: INTRO_ES
};

export function getProjectsStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}
