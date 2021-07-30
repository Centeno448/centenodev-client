import { useEffect } from 'react';
import { connect } from 'react-redux';
import FetchSpinner from '../Shared/FetchSpinner';
import { bindActionCreators } from 'redux';
import * as attachmentActions from '../../redux/actions/attachmentActions';

const AttachmentDetails = ({
  project,
  attachments,
  attachmentLoading,
  attachmentError,
  actions
}) => {
  useEffect(() => {
    actions.loadAttachments(project.guid);
  }, [project, actions]);

  return (
    <>
      <div className="row text-white">
        <h4>Attachments</h4>
      </div>
      <div className="row text-white">
        {attachmentLoading ? (
          <FetchSpinner subject="attachments" />
        ) : (
          <ul>
            {attachments.map((attachment) => (
              <li key={attachment.guid}>
                <a
                  className="text-white"
                  href={attachment.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {attachment.title}
                </a>
              </li>
            ))}
          </ul>
        )}

        {attachmentError && (
          <p>Could not fetch attachments. Please reload the page</p>
        )}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    attachments: state.attachments.attachments,
    attachmentError: state.attachments.error,
    attachmentLoading: state.attachments.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAttachments: bindActionCreators(
        attachmentActions.loadAttachments,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AttachmentDetails);