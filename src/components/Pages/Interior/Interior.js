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
            <Col md={6}>
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
                    Floors and carpet are very hard to replace if damaged, we
                    provide with carpet extraction as carpets houses many
                    diseases if kept unchecked, with extraction the hidden dust
                    and grease is cleaned off the carpet thus keeping the place
                    hygienic and fresh. The floor care provides extra layer of
                    protection from scratches and gives shine to the floor.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
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
                    Maintaining a business from inside is an integral part.
                    Keeping place neat and clean keeps it hygienic for everyone.
                    We provide janitorial services too for different kind of
                    buildings rather be a commercial or residential building.
                    Our team is well trained for sanitizing or maintaining a
                    healthy and clean building
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col md={6}>
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
                    Painting is the best way to get a new look for the house or
                    clean up kid’s mess and prevent walls and keeping them in
                    good shape. We provide any kind painting services too rather
                    it be inside or outside. We have expertise with spray paint
                    or stucco.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
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
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Interior
