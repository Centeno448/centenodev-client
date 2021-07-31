// English Strings
const LINKS_EN = `Links`;

const REPO_EN = `Github Repo`;

const PROD_EN = `Production Url`;

const EN_STRINGS = {
  links: LINKS_EN,
  repo: REPO_EN,
  prod: PROD_EN
};

// Spanish Strings
const LINKS_ES = `Enlaces`;

const REPO_ES = `Repo Github`;

const PROD_ES = `Url Producción`;

const ES_STRINGS = {
  links: LINKS_ES,
  repo: REPO_ES,
  prod: PROD_ES
};

export function getProjectDetailsStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}
