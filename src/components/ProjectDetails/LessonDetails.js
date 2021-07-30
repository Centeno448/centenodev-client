import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FetchSpinner from '../Shared/FetchSpinner';
import * as lessonActions from '../../redux/actions/lessonActions';
import { useEffect } from 'react';

const LessonDetails = ({
  project,
  lessons,
  lessonLoading,
  lessonError,
  actions
}) => {
  useEffect(() => {
    actions.loadLessons(project.guid);
  }, [project, actions]);

  return (
    <>
      {lessonLoading ? (
        <FetchSpinner subject="lessons" />
      ) : (
        <>
          <div className="row text-white">
            <h4>Lessons Learned</h4>
          </div>
          <div className="row text-white">
            <ul>
              {lessons.map((lesson) => (
                <li key={lesson.guid}>{lesson.content}</li>
              ))}
            </ul>
          </div>
        </>
      )}

      {lessonError && <p>Could not fetch lessons. Please refresh the page.</p>}
    </>
  );
};

function mapStateToProps(state) {
  return {
    lessons: state.lessons.lessons,
    lessonError: state.lessons.error,
    lessonLoading: state.lessons.loading
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
