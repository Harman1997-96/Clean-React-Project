import React from 'react'
import './workwithus.css'
import workwithus from '../../img/workwithus.jpg'

const WorkWithUs = () => {
  return (
    <div>
      {/* <div className="work-heading">
        <h1>Apply to Work with Us</h1>
      </div>
      <div className="work-header-img">
        <img src={workwithus} />
      </div> */}
      <div className="work-head">
        <div className="head-text">
          <div className="head-image">
            <img src={workwithus} alt="Work With us" />
          </div>
          <div class="text-on-image">
            <h1> Apply to Work with Us </h1>
          </div>
        </div>
        <div className="container-fluid">
          <div className="work-form">
            <div className='left-side"'>
              <div id="login-box">
                <div>
                  <div className="item">
                    <p style={{ fontWeight: 'bolder' }}>
                      Name<span className="required">*</span>
                    </p>
                    <div className="name-item">
                      <input
                        type="text"
                        name="name"
                        placeholder="First"
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Last"
                        required
                      />
                    </div>
                  </div>
                  <div className="item">
                    <p style={{ fontWeight: 'bolder' }}>
                      Email<span className="required">*</span>
                    </p>
                    <input type="text" name="name" />
                  </div>
                  <div className="item">
                    <p style={{ fontWeight: 'bolder' }}>
                      Phone Number<span className="required">*</span>
                    </p>
                    <input type="number" name="name" />
                  </div>
                  <div className="item">
                    <p style={{ fontWeight: 'bolder' }}>
                      Country of Residence<span className="required">*</span>
                    </p>
                    <input type="text" name="name" placeholder="Canada" />
                  </div>
                  <div className="item">
                    <p style={{ fontWeight: 'bolder' }}>
                      City of Residence<span className="required">*</span>
                    </p>
                    <input type="text" name="name" />
                  </div>
                  <div className="question">
                    <p style={{ fontWeight: 'bolder' }}>
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
                        <span>Yes</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                  <div className="question">
                    <p style={{ fontWeight: 'bolder' }}>
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
                        <span>Yes</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          defaultValue="none"
                          name="gender"
                          required
                        />{' '}
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                  <div className="question">
                    <p style={{ fontWeight: 'bolder' }}>
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
                        <span>I am allowed to work in Canada</span>
                      </label>
                    </div>
                  </div>
                  <div className="question">
                    <p style={{ fontWeight: 'bolder' }}>
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
                        <span>I accept the Privacy Policy</span>
                      </label>
                    </div>
                  </div>
                  <div className="btn-block">
                    <button type="submit" href="/">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkWithUs
