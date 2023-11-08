import styles from "./sign-up1.module.css";
import GoogleImg from '../assest/flat-color-icons_google.png'
import EdenLife from '../assest/edenLife.png'
import React from "react";

const SignUp1 = () => {
  return (
    <div className={styles.signUp1}>
      <div className={styles.modal}>
        <div className={styles.question}>
          <div className={styles.signUpOnNorebaseParent}>
            <b className={styles.signUpOn}>{`Sign up on Norebase `}</b>
            <div className={styles.norebaseIsThe}>
              Norebase is the easiest way to start, scale and operate your
              business like a pro lorem ipsum dolor
            </div>
          </div>
          <div className={styles.inputParent}>
            <input
              className={styles.input}
              id="Email"
              placeholder="Enter your email address"
              type="text"
            />
            <input
              className={styles.input}
              value="Password"
              placeholder="Enter your password"
              type="password"
              defaultValue="Password"
            />
          </div>
          <div className={styles.alreadyHaveAnContainer}>
            <span>{`Already have an account? `}</span>
            <span className={styles.loginHere}>Login here</span>
          </div>
          <button className={styles.button}>
            <b className={styles.getStarted}>Sign Up</b>
          </button>
          <button className={styles.button1}>
            <img
              className={styles.flatColorIconsgoogle}
              alt=""
              src={GoogleImg}
            />
            <b className={styles.signUpWith}>Sign up with Google</b>
          </button>
        </div>
      </div>
      <div className={styles.testimonials}>
        <div className={styles.carousel}>
          <div className={styles.carouselChild} />
          <div className={styles.carouselItem} />
          <div className={styles.carouselItem} />
          <div className={styles.carouselItem} />
        </div>
        <div className={styles.testimonial}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Elit nulla tincidunt nam
            imperdiet in interdum. Pellentesque felis ac laoreet sed mi. Lorem
            ipsum dolor sit amet consectetur. Elit nulla tincidunt nam imperdiet
            in interdum. Pellentesque felis ac laoreet sed mi.
          </div>
          <div className={styles.frameParent}>
            <div className={styles.johnDoeParent}>
              <b className={styles.johnDoe}>John Doe</b>
              <div className={styles.ceoEdenLife}>CEO Eden Life</div>
            </div>
            <img
              className={styles.frameChild}
              alt=""
              src={EdenLife}
            />
          </div>
          <img
            className={styles.testimonialChild}
            alt=""
            src="/frame-1000004642.svg"
          />
        </div>
        <div className={styles.carousel1}>
          <div className={styles.carouselChild1} />
          <div className={styles.carouselChild2} />
          <div className={styles.carouselChild1} />
        </div>
      </div>
    </div>
  );
};

export default SignUp1;
