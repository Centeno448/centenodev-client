import { combineReducers } from 'redux';
import projects from './projectReducer';
import lessons from './lessonsReducer';
import attachments from './attachmentReducer';
import language from './languageReducer';

const rootReducer = combineReducers({
  projects,
  lessons,
  attachments,
  language
});

export default rootReducer;
