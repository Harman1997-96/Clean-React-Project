import React, { useContext } from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import glassesimoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Carousel from 'react-bootstrap/Carousel'
import cleanerA from '../../img/cleanerA1.jpg'
import cleanerB from '../../img/cleaner2.jpg'
import cleanerC from '../../img/cleanerA3.jpg'

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' }

  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="Intro" id="Intro">
      <Carousel>
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerA} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerB} alt="Second slide" />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerC} alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Intro
