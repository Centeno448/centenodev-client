// English Strings
const RESUME_EN = `Resume`;

const EXPERIENCE_EN = `Experience`;

const POSITION_UDLA_1_EN = 'Software Developer Intern';

const POSITION_UDLA_2_EN = 'Software Developer';

const EDUCATION_EN = 'Education';

const CAREER_EN = 'Systems Engineer';

const EN_STRINGS = {
  resume: RESUME_EN,
  experience: EXPERIENCE_EN,
  positionUdla1: POSITION_UDLA_1_EN,
  positionUdla2: POSITION_UDLA_2_EN,
  education: EDUCATION_EN,
  career: CAREER_EN
};

// Spanish Strings
const RESUME_ES = `Currículum`;

const EXPERIENCE_ES = `Experiencia`;

const POSITION_UDLA_1_ES = 'Pasante Desarrollador de Software';

const POSITION_UDLA_2_ES = 'Desarrollador de Software';

const EDUCATION_ES = 'Educación';

const CAREER_ES = 'Ingeniero en Sistemas';

const ES_STRINGS = {
  resume: RESUME_ES,
  experience: EXPERIENCE_ES,
  positionUdla1: POSITION_UDLA_1_ES,
  positionUdla2: POSITION_UDLA_2_ES,
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
