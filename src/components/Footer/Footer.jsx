import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit'
import './Footer.css'
const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <div className="useful-links">
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Services
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    About
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Contact
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <div className="contact">
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  Varinder@vibrantinfra.ca
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />+ 17783876696
                </p>
                <div className="social_links">
                  <p>
                    <a
                      href="https://www.facebook.com/people/Vibrant-Infra-Services-Ltd/100086471646080/"
                      className="text-reset"
                      style={{ textDecoration: 'none' }}
                    >
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/vibrantinfraservicesltd/"
                      className="text-reset"
                      style={{ textDecoration: 'none' }}
                    >
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vibrant-infra-services-ltd-b27568252/"
                      className="text-reset"
                      style={{ textDecoration: 'none' }}
                    >
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.whatsapp.com/"
                      className="text-reset"
                      style={{ textDecoration: 'none' }}
                    >
                      <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Varinder Kumar
        </a>
      </div>
    </MDBFooter>
  )
}
export default Footer
