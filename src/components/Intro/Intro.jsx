import React, { useContext } from 'react'
import './Intro.css'
import { themeContext } from '../../Context'
import Carousel from 'react-bootstrap/Carousel'
import cleanerA from '../../img/gallery6.jpg'
import cleanerB from '../../img/gallery5.jpg'
import cleanerC from '../../img/gallery3.jpg'
import cleanerD from '../../img/gallery1.jpg'
import cleanerE from '../../img/gallery2.jpg'
import cleanerF from '../../img/gallery4.jpg'

import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Testimonial from '../Testimonials/Testimonial'

const Intro = () => {
  const theme = useContext(themeContext)
  return (
    <div className="Intro" id="Intro">
      <Carousel>
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerA} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerB} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerC} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerD} alt="Four slide" />
          </div>
        </Carousel.Item>{' '}
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerE} alt="Five slide" />
          </div>
        </Carousel.Item>{' '}
        <Carousel.Item>
          <div className="Intro-img">
            <img className="d-block w-100" src={cleanerF} alt="six slide" />
          </div>
        </Carousel.Item>
      </Carousel>
      <Services />
      <Contact />
      <Testimonial />
    </div>
  )
}

export default Intro
