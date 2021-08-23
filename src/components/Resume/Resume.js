import './Resume.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { getResumeStrings } from './ResumeStrings';

const Resume = ({ language }) => {
  const [resumeStrings, setResumeStrings] = useState(
    getResumeStrings(language)
  );

  useEffect(() => {
    setResumeStrings(getResumeStrings(language));
  }, [language]);

  return (
    <>
      <div className="row justify-content-center">
        <a
          href="https://drive.google.com/file/d/1VIEMuMoihKXIrwL1UOR1uRKOzl2QmeOA/view?usp=sharing"
          download
          target="_blank"
          rel="noreferrer"
          className=" col-md-2 resume-btn btn"
        >
          {resumeStrings.resume} PDF
        </a>
      </div>
      <div className="row justify-content-center ">
        <div className="col-6 text-center section-title-container">
          <h5 className="text-white">{resumeStrings.experience}</h5>
        </div>
      </div>
      <div className="row justify-content-center text-white">
        <div className="col-6">
          <div className="content-title float-md-start">
            {resumeStrings.positionUdla1} - UDLA, Quito
          </div>
          <div className="content-year float-md-end">10/2019 - 10/2020</div>
        </div>
      </div>
      <div className="row justify-content-center text-white">
        <div className="col-6">
          <ul>
            <li>{resumeStrings.activityUdla1}</li>
            <li>{resumeStrings.activityUdla2}</li>
            <li>{resumeStrings.activityUdla3}</li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col-6 text-center section-title-container">
          <h5 className="text-white">{resumeStrings.education}</h5>
        </div>
      </div>
      <div className="row justify-content-center text-white">
        <div className="col-6">
          <div className="content-title float-md-start">
            {resumeStrings.career} - UDLA, Quito
          </div>
          <div className="content-year float-md-end">08/2021</div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    language: state.language.language
  };
}

export default connect(mapStateToProps)(Resume);
