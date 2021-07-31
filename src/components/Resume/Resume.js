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
          href="https://juventudedesporto.cplp.org/files/sample-pdf_9359.pdf"
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
            <li>Analisis</li>
            <li>Desarrollo</li>
            <li>Pruebas</li>
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
          <div className="content-year float-md-end">09/2016 - 08/2021</div>
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
