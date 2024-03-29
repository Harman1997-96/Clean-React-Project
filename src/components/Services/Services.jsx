import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import Resume from './resume.pdf'
import Image from '../../img/logo.png'

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
    <div
      className="services"
      id="about"
      style={{
        backgroundImage: `linear-gradient(rgba(243, 241, 241, 0.959),rgba(237, 232, 232, 0.685)),url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        // zIndex: 110,
        // height: 600,
        // width: 600,
      }}
    >
      <blockquote class="sidekick">
        Your Trust, And Satisfaction Are Our Top Priorities.
        <cite>Varinder Kumar</cite>
      </blockquote>

      <div className="service_intro">
        {/* <h1>About Us</h1> */}
        <br />
        <div className="service_Title">
          <h3>Service that Matters</h3>
        </div>
        <br />
        <div className="service_description">
          <p>
            Serving a wide range of businesses throughout the lower mainland
            Cleaning Services provides professional commercial cleaning and
            janitorial services. As a dedicated cleaning service provider,
            ensuring customer satisfaction is our top priority. Our cleaners are
            trained and certified, take pride in providing industry-leading
            customer service and are available 24/7 for facilities of all sizes.
            We make sure that the cleaning needs of your business are met on
            time and within your budget. Our commercial cleaning teams use only
            modern cleaning technology help make sure your company maintains a
            healthy and tidy work environment.
          </p>
        </div>
        <div className="service_Title">
          <h3>Your Loyalty in Us</h3>
        </div>
        <div className="service_description">
          <p>
            We conduct all businesses with the highest standards Our staff is
            committed to providing a confident and professional experience and
            are dedicated to getting the job done when and how you need it. We
            have gathered an immense amount of experience in the industry and
            are always ready to put it to work, and we are also always ready for
            new challenges no matter the scale. We strive to deliver an
            excellent service experience and grow partnerships with our clients.
          </p>
        </div>
        <div className="service_Title">
          <h3>We Can Serve You Better</h3>
        </div>
        <div className="service_description">
          <p>
            Our purpose is to improve lives through what we do. our purpose is
            to provide you with the highest quality of cleaning. Your special
            needs and unique requests are respected here and our team will take
            the time necessary to find the solution to your problem. It's an
            honour to see our clients with smiles on their faces after a very
            successful job.We have been working in this field for more than five
            year.
          </p>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Services
