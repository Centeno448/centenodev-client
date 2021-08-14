// English Strings
const RESUME_EN = `Resume`;

const EXPERIENCE_EN = `Experience`;

const POSITION_UDLA_EN = 'Software Developer';

const EDUCATION_EN = 'Education';

const CAREER_EN = 'Systems Engineer';

const ACTIVITY_1_UDLA_EN = 'Discover requirements and design solutions.';
const ACTIVITY_2_UDLA_EN = 'Develop web and mobile application.';
const ACTIVITY_3_UDLA_EN = 'Design and execute tests.';

const EN_STRINGS = {
  resume: RESUME_EN,
  experience: EXPERIENCE_EN,
  positionUdla1: POSITION_UDLA_EN,
  activityUdla1: ACTIVITY_1_UDLA_EN,
  activityUdla2: ACTIVITY_2_UDLA_EN,
  activityUdla3: ACTIVITY_3_UDLA_EN,
  education: EDUCATION_EN,
  career: CAREER_EN
};

// Spanish Strings
const RESUME_ES = `Currículum`;

const EXPERIENCE_ES = `Experiencia`;

const POSITION_UDLA_ES = 'Desarrollador de Software';

const EDUCATION_ES = 'Educación';

const CAREER_ES = 'Ingeniero en Sistemas';

const ACTIVITY_1_UDLA_ES = 'Levantar requerimientos y diseñar soluciones.';
const ACTIVITY_2_UDLA_ES = 'Desarrollo de aplicaciones web y móviles.';
const ACTIVITY_3_UDLA_ES = 'Diseño y ejecución de pruebas.';

const ES_STRINGS = {
  resume: RESUME_ES,
  experience: EXPERIENCE_ES,
  positionUdla1: POSITION_UDLA_ES,
  activityUdla1: ACTIVITY_1_UDLA_ES,
  activityUdla2: ACTIVITY_2_UDLA_ES,
  activityUdla3: ACTIVITY_3_UDLA_ES,
  education: EDUCATION_ES,
  career: CAREER_ES
};

export function getResumeStrings(language) {
  switch (language) {
    case 'EN':
      return EN_STRINGS;

    case 'ES':
      return ES_STRINGS;

    default:
      return EN_STRINGS;
  }
}
