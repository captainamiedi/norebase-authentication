import React from "react";
import styles from "./sign-up2.module.css";
import arrowImg from '../assest/right-sm.png'

const SignUp2 = ({handleChange, handleFirstSubmit}) => {
  return (
    <div className={styles.signUp2}>
      <div className={styles.modal}>
        <div className={styles.question}>
          <div className={styles.welcomeOnboardWedLikeToParent}>
            <h3 className={styles.welcomeOnboardWed}>
              Welcome onboard, we’d like to know your full name
            </h3>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <form className={styles.inputParent} onSubmit={handleFirstSubmit}>
            <div className="pcb-1" style={{width: '100%'}}>
              <label htmlFor="fullName" className="auth-label" style={{textAlign: 'justify'}}>Full Name</label>
              <input
                className='input'
                placeholder="Enter your full name"
                type="text"
                id="fullName"
                name="fullName"
                required
                onChange={handleChange}
              />

            </div>
            <div className="pcb-1" style={{width: '100%'}}>
              <label htmlFor="phoneNumber" className="auth-label" style={{textAlign: 'justify'}}>Phone Number</label>
              <input
                className='input'
                placeholder="Enter your Phone number"
                type="tel"
                id="phoneNumber"
                required
                onChange={handleChange}
                name="phoneNumber"
              />
            </div>
            <div className="pcb-1" style={{paddingBottom: '2rem', width: '100%'}}>
            <label htmlFor='hearAbout' className='auth-label' style={{textAlign: 'justify'}}>How did you hear about us?</label>
            <select
              id='hearAbout'
              name='hearAboutUs'
              className='input'
              required
              onChange={handleChange}
            >
              <option value="LinkedIn">LinkedIn</option>
              <option value="twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
            </select>
            </div>
            <div style={{marginBottom: '2rem', width: '100%'}}>
              <button className={styles.button} type="submit">
                <p className={styles.getStarted}>Next</p>
                <img
                  className={styles.arrowrightSmIcon}
                  alt=""
                  src={arrowImg}
                />
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
