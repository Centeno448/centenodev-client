import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FetchSpinner from '../Shared/FetchSpinner';
import * as lessonActions from '../../redux/actions/lessonActions';
import { useEffect, useState } from 'react';
import { getLessonDetailsStrings } from './LessonDetailsStrings';

const LessonDetails = ({
  project,
  lessons,
  lessonLoading,
  lessonError,
  actions,
  language
}) => {
  const [lessonDetailsStrings, setLessonDetailsStrings] = useState(
    getLessonDetailsStrings(language)
  );

  useEffect(() => {
    setLessonDetailsStrings(getLessonDetailsStrings(language));
  }, [language]);

  useEffect(() => {
    actions.loadLessons(project.guid);
  }, [project, actions]);

  return (
    <>
      {lessons.length > 0 && (
        <>
          <div className="row text-white">
            <h4>{lessonDetailsStrings.lessons}</h4>
          </div>
          {lessonLoading ? (
            <FetchSpinner subject="lessons" />
          ) : (
            <>
              <div className="row text-white">
                <ul>
                  {lessons.map((lesson) => (
                    <li key={lesson.guid}>{lesson.content_EN}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {lessonError && <p>{lessonDetailsStrings.fetchError}</p>}
        </>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    lessons: state.lessons.lessons,
    lessonError: state.lessons.error,
    lessonLoading: state.lessons.loading,
    language: state.language.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadLessons: bindActionCreators(lessonActions.loadLessons, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonDetails);
