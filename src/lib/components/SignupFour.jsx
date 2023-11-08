import styles from "./sign-up4.module.css";
import React from 'react'

const SignUp4 = () => {
  return (
    <div className={styles.signUp4}>
      <div className={styles.modal}>
        <div className={styles.question}>
          <div className={styles.oneLastThingHowDidYouHeParent}>
            <b className={styles.oneLastThing}>
              One last thing, how did you hear about us?
            </b>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              value="How did you hear about us?"
              placeholder="Select an option"
              type="text"
              defaultValue="How did you hear about us?"
            />
          </div>
          <button className={styles.button}>
            <b className={styles.getStarted}>Finish up</b>
            <img
              className={styles.arrowrightSmIcon}
              alt=""
              src="/arrowrightsm.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp4;
