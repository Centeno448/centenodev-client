import { combineReducers } from 'redux';
import projects from './projectReducer';
import lessons from './lessonsReducer';
import attachments from './attachmentReducer';

const rootReducer = combineReducers({
  projects,
  lessons,
  attachments
});

export default rootReducer;
