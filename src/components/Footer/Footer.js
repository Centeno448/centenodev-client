import './Footer.css';
import LinkedInLogo from '../../assets/img/LI-In-Bug.png';

const Footer = () => {
  return (
    <>
      <footer className="fixed-bottom text-center text-lg-start bg-light text-muted">
        <section className="">
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Email
                </h6>
                <a
                  className="email-link"
                  href="mailto:diegocenteno448@gmail.com"
                >
                  diegocenteno448@gmail.com
                </a>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
                <p>
                  <a
                    href="https://www.linkedin.com/in/diego-andres-centeno/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-reset"
                  >
                    <img
                      src={LinkedInLogo}
                      alt="linked in logo"
                      className="social-logo"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
