import React from "react";
import styles from "./sign-up2.module.css";
import arrowImg from '../assest/right-sm.png'

const SignUp2 = ({setStep}) => {
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
          <div className={styles.inputParent}>
            <div className="pcb-1">
              <label htmlFor="firstName" className="auth-label" style={{textAlign: 'justify'}}>First Name</label>
              <input
                className='input'
                value="First name"
                placeholder="Enter your first name"
                type="text"
                defaultValue="First name"
                id="firstName"
              />

            </div>
            <div className="pcb-1" style={{paddingBottom: '2rem'}}>
              <label htmlFor="lastName" className="auth-label" style={{textAlign: 'justify'}}>Last Name</label>
              <input
                className='input'
                value="Last name"
                placeholder="Enter your last name/surname"
                type="text"
                defaultValue="Last name"
                id="lastName"
              />
            </div>
          </div>
          <div style={{marginBottom: '2rem'}}>
            <button className={styles.button} onClick={() => setStep(3)}>
              <b className={styles.getStarted}>Next</b>
              <img
                className={styles.arrowrightSmIcon}
                alt=""
                src={arrowImg}
              />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
