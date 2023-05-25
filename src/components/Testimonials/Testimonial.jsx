import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Carousel from 'react-bootstrap/Carousel'

import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import Review1 from '../../img/review1.jpeg'
import Review2 from '../../img/review2.jpg'
import Review3 from '../../img/review3.jpg'
import Review4 from '../../img/review4.jpg'
import Review5 from '../../img/review5.jpg'
import Review6 from '../../img/review6.webp'

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
      <Carousel>
        <Carousel.Item>
          <section className="home-testimonial">
            <div className="container-fluid">
              <section className="home-testimonial-bottom">
                <div className="container testimonial-inner">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="d-flex justify-content-center pt-2 pb-2">
                            <img
                              className="tm-people"
                              src={Review1}
                              // src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                              alt
                            />
                          </div>
                          <div className="link-name d-flex justify-content-center">
                            Luke Sikma
                            <div className="date-range">
                              <br />
                              2022-07-18
                              <div className="goolge-icon">
                                <i class="fa fa-google" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          <div className="ratting">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                          <div className="tour-text color-grey-3 text-center">
                            “and polite and did a great job! Highly recommend.
                            And they were able to schedule the cleaning
                            within 48 hours!”
                          </div>

                          {/* <div className="link-position d-flex justify-content-center">
                        Student
                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="d-flex justify-content-center pt-2 pb-2">
                            <img
                              className="tm-people"
                              // src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                              src={Review2}
                              alt
                            />
                          </div>
                          <div className="link-name d-flex justify-content-center">
                            Kaitie Coghlan
                            <div className="date-range">
                              <br />
                              2022-07-13
                              <div className="goolge-icon">
                                <i class="fa fa-google" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          <div className="ratting">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                          <div className="tour-text color-grey-3 text-center">
                            “move out clean for me. They did a fantastic job,
                            leaving my townhouse spotless. They far exceeded
                            my expectations,!”
                          </div>

                          {/* <div className="link-position d-flex justify-content-center">
                        Student
                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="d-flex justify-content-center pt-2 pb-2">
                            <img
                              className="tm-people"
                              src={Review3}
                              // src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                              alt
                            />
                          </div>
                          <div className="link-name d-flex justify-content-center">
                            Max Everett
                            <div className="date-range">
                              <br />
                              2022-07-10
                              <div className="goolge-icon">
                                <i class="fa fa-google" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          <div className="ratting">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                          <div className="tour-text color-grey-3 text-center">
                            “loved how he toured me through my apartment when he
                            was done to show all the nooks and corners he was
                            able to clean. Very”
                          </div>

                          {/* <div className="link-position d-flex justify-content-center">
                        Student
                      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="home-testimonial">
            <div className="container-fluid">
              <section className="home-testimonial-bottom">
                <div className="container testimonial-inner">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="d-flex justify-content-center pt-2 pb-2">
                            <img
                              className="tm-people"
                              src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                              alt
                            />
                          </div>
                          <div className="link-name d-flex justify-content-center">
                            Matt Finnigan
                            <div className="date-range">
                              <br />
                              2022-08-08
                              <div className="goolge-icon">
                                <i class="fa fa-google" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          <div className="ratting">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                          <div className="tour-text color-grey-3 text-center">
                            “Our pre caning service went out of business. Simply
                            Clean was responsive and able to schedule us
                            for new cleanings”
                          </div>

                          {/* <div className="link-position d-flex justify-content-center">
                        Student
                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="d-flex justify-content-center pt-2 pb-2">
                            <img
                              className="tm-people"
                              src={Review4}
                              // src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                              alt
                            />
                          </div>
                          <div className="link-name d-flex justify-content-center">
                            Kevin Thomson
                            <div className="date-range">
                              <br />
                              2022-08-03
                              <div className="goolge-icon">
                                <i class="fa fa-google" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          <div className="ratting">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                          <div className="tour-text color-grey-3 text-center">
                            “We laund they were professional to they did and
                            easy and dinate with They far exceeded
                            my expectations,!”
                          </div>

                          {/* <div className="link-position d-flex justify-content-center">
                        Student
                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 style-3">
                      <div className="tour-item ">
                        <div className="tour-desc bg-white">
                          <div className="d-flex justify-content-center pt-2 pb-2">
                            <img
                              className="tm-people"
                              src={Review5}
                              // src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                              alt
                            />
                          </div>
                          <div className="link-name d-flex justify-content-center">
                            Tyler Marklyn
                            <div className="date-range">
                              <br />
                              2022-07-29
                              <div className="goolge-icon">
                                <i class="fa fa-google" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>
                          <div className="ratting">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                          </div>
                          <div className="tour-text color-grey-3 text-center">
                            “We realized we needed move-out cleaning on very
                            short notice. I called 3 places on Monday to see if
                            they had availability on”
                          </div>

                          {/* <div className="link-position d-flex justify-content-center">
                        Student
                      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      ></Swiper>
    </div>
  )
}

export default Testimonial
