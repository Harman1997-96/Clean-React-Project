import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import Review from "../../img/review.png";
import Work from "../../img/HowWork.png";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-form" id="contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="number"
              name="phone_Number"
              className="user"
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="user_email"
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
            <input type="submit" value="Send" className="button" />
            <span>{done && "Thanks for Contacting me"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
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
  );
};

export default Contact;
