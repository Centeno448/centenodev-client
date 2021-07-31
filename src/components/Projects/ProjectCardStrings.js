// English Strings
const REPO_EN = `Github Repo`;

const PROD_EN = `Production Url`;

const EN_STRINGS = {
  repo: REPO_EN,
  prod: PROD_EN
};

// Spanish Strings
const REPO_ES = `Repo Github`;

const PROD_ES = `Url Producción`;

const ES_STRINGS = {
  repo: REPO_ES,
  prod: PROD_ES
};

export function getProjectCardStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}

export function getProjectDescriptionByLang(lang, project) {
  return lang === 'EN' ? project.description_EN : project.description_ES;
}
