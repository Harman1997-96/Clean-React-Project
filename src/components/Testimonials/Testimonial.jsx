import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites.',
    },
    {
      img: profilePic2,
      review:
        'My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.',
    },
    {
      img: profilePic3,
      review:
        'Now it’s almost like having a designer right here with me. I just choose the page, make the change and click save. It’s so simple.Thanks, guys!',
    },
    {
      img: profilePic4,
      review:
        'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    },
  ]

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from us...</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonial
