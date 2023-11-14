import React from "react";
import rightArrow from '../assest/right-sm.png'

import styles from "./sign-up3.module.css";

const SignUp3 = ({handleChange, handleFirstSubmit}) => {
  return (
    <div className={styles.signUp3}>
      <div className={styles.modal}>
        <div className={styles.question}>
          <div className={styles.niceToMeetYouJohnWhatIsParent}>
            <h3 className={styles.niceToMeet}>
              Nice to meet you John, what is your phone number?
            </h3>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <form className={styles.inputWrapper} onSubmit={handleChange}>
            <label htmlFor="phoneNumber" style={{textAlign: 'justify'}} className="auth-label">Phone Number</label>
            <input
              className='input'
              placeholder="Enter your phone number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              onChange={handleChange}
            />
          <div style={{paddingTop: '2rem'}}>
            <button className={styles.button} type="submit">
              <p className={styles.getStarted}>Next</p>
              <img
                className={styles.arrowrightSmIcon}
                alt=""
                src={rightArrow}
              />
            </button>

          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
