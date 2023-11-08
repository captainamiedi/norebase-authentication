import React from "react";
import rightArrow from '../assest/right-sm.png'

import styles from "./sign-up3.module.css";

const SignUp3 = ({setStep}) => {
  return (
    <div className={styles.signUp3}>
      <div className={styles.modal}>
        <div className={styles.question}>
          <div className={styles.niceToMeetYouJohnWhatIsParent}>
            <b className={styles.niceToMeet}>
              Nice to meet you John, what is your phone number?
            </b>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="phoneNumber" style={{textAlign: 'justify'}} className="auth-label">Phone Number</label>
            <input
              className='input'
              value="Phone number"
              placeholder="Enter your phone number"
              type="text"
              defaultValue="Phone number"
              id="phoneNumber"
            />
          </div>
          <button className={styles.button} onClick={() => setStep(4)}>
            <b className={styles.getStarted}>Next</b>
            <img
              className={styles.arrowrightSmIcon}
              alt=""
              src={rightArrow}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
