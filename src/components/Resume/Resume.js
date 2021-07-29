import './Resume.css';

const Resume = () => {
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
          Resume PDF
        </a>
      </div>
      <div className="row justify-content-center ">
        <div className="col-6 text-center section-title-container">
          <h5 className="text-white">Experience</h5>
        </div>
      </div>
      <div className="row justify-content-center text-white">
        <div className="col-6">
          <div className="content-title float-md-start">
            Systems Intern - UDLA, Quito
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
          <h5 className="text-white">Education</h5>
        </div>
      </div>
      <div className="row justify-content-center text-white">
        <div className="col-6">
          <div className="content-title float-md-start">
            Systems Engineer - UDLA, Quito
          </div>
          <div className="content-year float-md-end">09/2016 - 08/2021</div>
        </div>
      </div>
    </>
  );
};

export default Resume;
