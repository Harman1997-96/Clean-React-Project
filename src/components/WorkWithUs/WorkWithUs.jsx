import React, { useContext, useRef, useState } from 'react'
import './workwithus.css'
import workwithus from '../../img/workwithus.jpg'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'
import { themeContext } from '../../Context'

const WorkWithUs = () => {
  const notify = () => toast('Thanks For Contact US')
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const form = useRef()
  const [done, setDone] = useState(false)   
  const sendEmail = (e) => {
    e.preventDefault()
  emailjs
  .sendForm(
    'service_wjgphai',
    'template_yjd2fup',
    form.current, 
    'q8Zk1WgiAbVNQSf91',
    setDone(''),
  )
  .then(
    (result) => {
      console.log(result.text)
      setDone(true)
      form.reset()
      setDone('')
      toast.success('Thank You For Contact')

    },
    
    (error) => {
      toast.error('Something wrong')
      console.log(error.text)
    },
  )
}
  return (
    <div>
      <div className="work-head">
        <div className="head-text">
          <div className="head-image">
            <img src={workwithus} alt="Work With us" />
          </div>
        </div>
        <div className="container-fluid">
          <div className="work-form">
            <div className='left-side"'>
              <div id="login-box">
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <div className="item">
                    <div class="text-on-image">
                      <h1
                        style={{
                          fontFamily: 'sans-serif',
                        }}
                      >
                        {' '}
                        Apply to Work with Us{' '}
                      </h1>
                    </div>
                    <p
                      style={{
                        fontWeight: 'bolder',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      Name<span className="required">*</span>
                    </p>
                    <div className="name-item">
                      <input
                        type="text"
                        name="to_name"
                        placeholder="First"
                        required
                      />
                      <input
                        type="text"
                        name="to_lastName"
                        placeholder="Last"
                        required
                      />
                    </div>
                  </div>
                  <div className="item">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      Email<span className="required">*</span>
                    </p>
                    <input type="text" name="from_email" />
                  </div>
                  <div className="item">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      Phone Number<span className="required">*</span>
                    </p>
                    <input type="number" name="from_phoneNumber" />
                  </div>
                  <div className="item">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      Country of Residence<span className="required">*</span>
                    </p>
                    <input type="text" name="from_country" placeholder="Canada" />
                  </div>
                  <div className="item">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      City of Residence<span className="required">*</span>
                    </p>
                    <input type="text" name="from_cityResidence" />
                  </div>
                  <div className="question">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      Do you have previous experience in windows cleaning,
                      pressure washing or painting?
                      <span className="required">*</span>
                    </p>
                    <div className="question-answer">
                      <label>
                        <input
                          type="radio"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span style={{ fontFamily: 'sans-serif' }}>Yes</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span style={{ fontFamily: 'sans-serif' }}>No</span>
                      </label>
                    </div>
                  </div>
                  <div className="question">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      Do you have any certification
                      <span className="required">*</span>
                    </p>
                    <div className="question-answer">
                      <label>
                        <input
                          type="radio"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span style={{ fontFamily: 'sans-serif' }}>Yes</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span style={{ fontFamily: 'sans-serif' }}>No</span>
                      </label>
                    </div>
                    <div className="certificate-box">
                      <input
                        type="text"
                        id="certificate"
                        name="from_certificate"
                        defaultValue="Certificates"
                      />
                    </div>
                  </div>
                  <div className="question">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      Are you allowed to work in Canada?
                      <span className="required">*</span>
                    </p>
                    <div className="question-answer">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span style={{ fontFamily: 'sans-serif' }}>
                          I am allowed to work in Canada
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="question">
                    <p
                      style={{ fontWeight: 'bolder', fontFamily: 'sans-serif' }}
                    >
                      Privacy Policy
                      <span className="required">*</span>
                    </p>
                    <div className="question-answer">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span style={{ fontFamily: 'sans-serif' }}>
                          I accept the Privacy Policy
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="btn-block">
                    <button type="submit" href="/"
                    onClick={notify}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkWithUs
