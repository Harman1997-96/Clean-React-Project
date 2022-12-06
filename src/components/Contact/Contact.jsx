import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { themeContext } from '../../Context'
const Contact = () => {
  const notify = () => toast('Thanks for Contacting me')
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const form = useRef()
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_awris65',
        'template_ls556xd',
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
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <>
      <div className="contact-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
            <span>Contact us</span>
            <div
              className="blur s-blur1"
              style={{ background: '#ABF1FF94' }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="to_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="number"
              name="from_Number"
              className="user"
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="from_email"
              className="user"
              placeholder="Email"
            />

            <select
              type="email"
              name="user_email"
              className="user"
              placeholder="Select"
            >
              <option value="Exterior">Please Select Option</option>

              <option value="Exterior">Exterior</option>
              <option value="Interior">Interior</option>
            </select>
            <textarea name="message" className="user" placeholder="Message" />
            <input
              type="submit"
              value="Send"
              className="button"
              onClick={notify}
            />
            <span>{done && 'Thanks for Contacting me'}</span>
            <div
              className="blur c-blur1"
              style={{ background: 'var(--purple)' }}
            ></div>
          </form>
        </div>
      </div>
      {/* <div className="review">
        <img src={Review} />
      </div>
      <div className="work">
        <img src={Work} />
      </div> */}
    </>
  )
}

export default Contact
