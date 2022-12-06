import React from 'react'
import WindowCleaning from '../../../img/Exterior1.jpg'
import PressureWashing from '../../../img/Exterior3.jpg'
import SnowRemoval from '../../../img/Exterior4.jpg'
import Guttercleaning from '../../../img/Exterior5.jpg'
import Garbageremoval from '../../../img/Exterior6.jpg'
import GlassElevator from '../../../img/Exterior7-A.jpg'
import Painting from '../../../img/painting.jpg'
import Renoation from '../../../img/Renoation.jpg'
import Conopies from '../../../img/Conopies.jpg'

import './Exterior.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Exterior = () => {
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
                      <img src={WindowCleaning} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Window Cleaning</h3>
                  <div>
                    The windows and glass surfaces of residential & commercial
                    buildings.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={PressureWashing} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Pressure Washing</h3>
                  <div>
                    The use of high-pressure water spray to remove loose paint,
                    mold, grime.
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={SnowRemoval} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3> Snow Removal</h3>
                  <div>
                    The job removing snow after snowfall to make travel easier
                    and safer.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={Guttercleaning} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Gutter Cleaning</h3>
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
                      <img src={Garbageremoval} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Garbage Removal</h3>
                  <div>
                    The transfer of solid waste from the point of use and
                    disposal.
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col md={4}>
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src={GlassElevator} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Glass Canopy</h3>
                  <div>
                    Glass Canopy is ideal, residential elevator design and
                    simplicity.
                  </div>
                </div>
              </div>
            </Col>{' '}
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
            </Col>{' '}
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
                      <img src={Conopies} />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Skylight </h3>
                  <div>
                    A canopy is a layer of something that spreads out and covers
                    an Area.
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

export default Exterior
