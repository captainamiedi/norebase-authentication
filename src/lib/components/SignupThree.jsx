import React from "react";
import rightArrow from '../assest/right-sm.png'

import styles from "./sign-up3.module.css";

const SignUp3 = ({setStep}) => {
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
          <div className={styles.inputWrapper}>
            <label htmlFor="phoneNumber" style={{textAlign: 'justify'}} className="auth-label">Phone Number</label>
            <input
              className='input'
              value="Phone number"
              placeholder="Enter your phone number"
              type="text"
              defaultValue="Phone number"
              id="phoneNumber"
              style={{width: '85%'}}
            />
          </div>
          <div style={{paddingTop: '2rem'}}>
            <button className={styles.button} onClick={() => setStep(4)}>
              <p className={styles.getStarted}>Next</p>
              <img
                className={styles.arrowrightSmIcon}
                alt=""
                src={rightArrow}
              />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
