import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import Resume from './resume.pdf'

import Review from '../../img/review.png'

const Services = () => {
  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  }

  return (
    <div className="services" id="services">
      <div className="service_intro">
        <h1>Our Difference is Real</h1>
        <br />
        <div className="service_Title">
          <h3>Complete Service Provider</h3>
        </div>
        <br />
        <div className="service_description">
          <p>
            Our core business is window cleaning, and pressure washing. However,
            we take pride in our ability to solve all of our clients’ service
            challenges. 30 years of experience has given Coastline Services
            expertise in many related fields and we have also built the
            relationship with many leading companies in the industry. This
            provides Coastline with the capability to complete all jobs to our
            very high standards.
          </p>
        </div>
        <div className="service_Title">
          <h3>Complete Service Provider</h3>
        </div>
        <div className="service_description">
          <p>
            Our core business is window cleaning, and pressure washing. However,
            we take pride in our ability to solve all of our clients’ service
            challenges. 30 years of experience has given Coastline Services
            expertise in many related fields and we have also built the
            relationship with many leading companies in the industry. This
            provides Coastline with the capability to complete all jobs to our
            very high standards.
          </p>
        </div>
        <div className="service_Title">
          <h3>Complete Service Provider</h3>
        </div>
        <div className="service_description">
          <p>
            Our core business is window cleaning, and pressure washing. However,
            we take pride in our ability to solve all of our clients’ service
            challenges. 30 years of experience has given Coastline Services
            expertise in many related fields and we have also built the
            relationship with many leading companies in the industry. This
            provides Coastline with the capability to complete all jobs to our
            very high standards.
          </p>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Services
