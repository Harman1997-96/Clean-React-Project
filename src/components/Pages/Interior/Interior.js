import React from 'react'
import './Interior.css'
import InteriorImg from '../../../img/cleanerA3.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Cleaning from '../../../img/InteriorCleaning1.jpg'
import Construction from '../../../img/construction.jpg'
import Painting from '../../../img/painting.jpg'
import Renoation from '../../../img/Renoation.jpg'
import Janitor from '../../../img/janitor-cleaning.jpg'

const Interior = () => {
  return (
    <div>
      <Container>
        <div className="exterior_page">
          <Row>
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={Painting} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Painting</h3>
                  <div>
                    The creation of certain aesthetic qualities, in a
                    two-dimensional visual.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={Renoation} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Renoation</h3>
                  <div>
                    The Modification of any existing structure, or portion of a
                    structure.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={Cleaning} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3> Floor Care</h3>
                  <div>
                    A Cleaner is a industry worker workplace is always clean &
                    sanitary.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={Construction} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Construction</h3>
                  <div>
                    The process of removing any debris,your gutters and
                    downspouts ground.
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={Janitor} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Janitorial</h3>
                  <div>
                    Janitorial building and keeping it maintained in good
                    condition.
                  </div>
                </div>
              </div>
            </Col>{' '}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Interior
