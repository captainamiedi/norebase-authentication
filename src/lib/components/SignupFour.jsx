import React from 'react'
import styles from "./sign-up4.module.css";
import rightArrow from '../assest/right-sm.png'

const SignUp4 = () => {
  return (
    <div className={styles.signUp4}>
      <div className={styles.modal}>
        <div className={styles.question}>
          <div className={styles.oneLastThingHowDidYouHeParent}>
            <h3 className={styles.oneLastThing}>
              One last thing, how did you hear about us?
            </h3>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='hearAbout' className='auth-label' style={{textAlign: 'justify'}}>How did you hear about us?</label>
            <select
              id='hearAbout'
              name='hearAboutUs'
              className='input'
            >
              <option value="LinkedIn">LinkedIn</option>
              <option value="twitter">Twitter</option>
              <option value="Instagram">Instagram</option>
            </select>
          </div>
          <button className={styles.button}>
            <p className={styles.getStarted}>Finish up</p>
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

export default SignUp4;
