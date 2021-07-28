const ProjectDetails = () => {
  return (
    <>
      <div className="p-5 shadow border border-dark rounded bg-light">
        <div className="row">
          <h2>Project: Nombre de Proyecto</h2>
        </div>
        <div className="row">
          <p className="col-md-6">
            Github repo:{' '}
            <a
              rel="noreferrer"
              href="https://github.com/Centeno448/edujs-api"
              target="_blank"
            >
              https://github.com/Centeno448/edujs-api
            </a>
          </p>
          <p className="col-md-6">
            Production Link:{' '}
            <a
              rel="noreferrer"
              href="https://github.com/Centeno448/edujs-api"
              target="_blank"
            >
              https://github.com/Centeno448/edujs-api
            </a>
          </p>
        </div>
        <div className="row">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa nihil
            esse officia quae vel ab explicabo! Totam minima expedita maiores
            obcaecati accusamus deleniti voluptatum, repudiandae dignissimos.
            Nostrum recusandae dolore eveniet!
          </p>
        </div>

        <div className="row">
          <h3>Lessons Learned</h3>
        </div>
        <div className="row">
          <ul>
            <li>ada</li>
            <li>asdwad</li>
            <li>123asd2</li>
          </ul>
        </div>
        <div className="row">
          <h3>Attachments</h3>
        </div>
        <div className="row">
          <ul>
            <li>ada</li>
            <li>asdwad</li>
            <li>123asd2</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
