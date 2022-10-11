import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit'

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

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a
                  href="https://www.facebook.com/people/Vibrant-Infra-Services-Ltd/100086471646080/"
                  className="text-reset"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/vibrantinfraservicesltd/"
                  className="text-reset"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/vibrant-infra-services-ltd-b27568252/"
                  className="text-reset"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </p>
              <p>
                <a href="https://www.whatsapp.com/" className="text-reset">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  <i class="fa fa-home" aria-hidden="true">
                    Home
                  </i>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <i class="fa fa-building" aria-hidden="true">
                    Services
                  </i>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <i class="fa fa-eye" aria-hidden="true">
                    About
                  </i>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <i class="fa fa-phone" aria-hidden="true">
                    Contact
                  </i>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />4 A, Sahajanand Complex,
                2416,Pune -Maharashtra 411001
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Email:-Varinder@vibrantinfra.ca
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                Phone:- + 17783876696
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Vibrant Realty & Infrastructure
        </a>
      </div>
    </MDBFooter>
  )
}
export default Footer
