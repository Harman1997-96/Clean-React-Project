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
            <Col md={6}>
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
                    Gutters are integral part of a building especially in lower
                    mainland where we receive good amount of rain. Clean gutters
                    ensure movement of water to drains and thus not making water
                    to flow over the gutter walls.
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col md={6}>
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
                    Gutters are integral part of a building especially in lower
                    mainland where we receive good amount of rain. Clean gutters
                    ensure movement of water to drains and thus not making water
                    to flow over the gutter walls.
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
                    .
                  </div>
                </div>
              </div>
            </Col>{' '}
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
                    You have decided to renovate your old home or just want to
                    remodel your house, we have expertise in all kinds of
                    renovation rather it be the new floors or tiles or railings
                    or complete changeover.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
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
                    After snowfall it is important to make commute safe for
                    people or cars and to make your business look clear and
                    responsible which welcomes more customers or future renters.
                    Moreover, the city also fines the businesses with snow
                    covered sidewalks or parkade entrances. We have various
                    tools to remove snow from different type of areas
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
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
                    Businesses that have canopies outside helps customers to get
                    there with ease as it acts as a shield from rain or snow. A
                    clean canopy speaks for itself as it makes a business look
                    professional and welcoming To keep this solution to its
                    highest efficiency. We have variety of solutions to clean
                    the canopies rather it be glass or metal.
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col md={6}>
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
                    <p>
                      We know how important clear view is, rather it be your
                      office window or your living room, we are ready to free it
                      of any dirt or grime.
                    </p>
                    <h3>
                      The window cleaning services provided by Vibrant Infra
                      includes:
                    </h3>
                    <div className="list-ul">
                      <ul>
                        <li>Interior glass cleaning</li>
                        <li>Exterior glass cleaning</li>
                        <li>Water-feed pole</li>
                        <li>Exterior brush and blast</li>
                        <li>Window Cleaning by Boom lift</li>
                        <li>Glass partition cleaning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
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
                    Pressure washing is very complex yet effective way of
                    cleaning different surfaces and our team is well experienced
                    to handle any kind of pressure washing rather it be hot or
                    cold water pressure washing.
                  </div>
                  <div className="list-ul">
                    <ul>
                      <li> Exterior Building Surfaces</li>
                      <li> Driveways & Parkways</li>
                      <li> Store Fronts</li>
                      <li> Service Areas</li>
                      <li> Roofs</li>
                      <li> Gum Removal</li>
                      <li> Oil Stains</li>
                      <li> Graffiti</li>
                      <li> Decks & Patios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col md={6}>
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
                    Skylights are very effective way used by buildings to
                    illuminate their areas using natural light which is very
                    environmentally friendly solution. To keep this solution to
                    its highest efficiency, it is important to keep them clean
                    of algae or dust. We have different and effective solutions
                    of keeping them in the best shape possible.
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
