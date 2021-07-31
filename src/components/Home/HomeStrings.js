// English Strings
const WELCOME_EN = `Hello there!`;

const DESC_EN_1 = `My name is Diego Centeno and I'm a fullstack developer. I enjoy
working on difficult problems and strive to deliver performant,
maintainable and testable code.`;

const DESC_EN_2 = `Amittedly, I prefer to work on backend/devops solutions,
however, I'm also proficient in frontend frameworks. Feel free
to look at some of the projects I have contributed to and don't
think twice about contacting me!`;

const EMAIL_EN = 'Email';

const RESUME_EN = `Resume`;

const PROJECTS_EN = `Projects`;

const EN_STRINGS = {
  welcome: WELCOME_EN,
  desc_1: DESC_EN_1,
  desc_2: DESC_EN_2,
  resume: RESUME_EN,
  projects: PROJECTS_EN,
  email: EMAIL_EN
};

// Spanish Strings
const WELCOME_ES = `Hola!`;

const DESC_ES_1 = `Mi nombre es Diego Centeno y soy un fullstack developer.
Me gusta trabajar en problemas complejos y me esfuerzo por entregar código testeable, mantenible y eficiente`;

const DESC_ES_2 = `De preferencia me gusta trabajar en soluciones backend/devops, sin embargo, soy competente con frameworks frontend/móvil.
Siéntase libre de revisar algunos de los proyectos en los que he contribuido y no dude en contactarme!`;

const EMAIL_ES = 'Correo';

const RESUME_ES = `Currículum`;

const PROJECTS_ES = `Proyectos`;

const ES_STRINGS = {
  welcome: WELCOME_ES,
  desc_1: DESC_ES_1,
  desc_2: DESC_ES_2,
  resume: RESUME_ES,
  projects: PROJECTS_ES,
  email: EMAIL_ES
};

export function getHomeStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}
