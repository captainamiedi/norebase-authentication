import React, { ReactNode } from 'react';
import "./sign-up1.css";

export type SignupProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};


export function Signup({ children }: SignupProps) {
  return (
    <div className="sign-up-1">
      <div className="modal">
        <div className="question">
          <div className="sign-up-on-norebase-parent">
            <b className="sign-up-on">{`Sign up on Norebase `}</b>
            <div className="norebase-is-the">
              Norebase is the easiest way to start, scale and operate your
              business like a pro lorem ipsum dolor
            </div>
          </div>
          <div className="input-parent">
            <input
              className="input"
              id="Email"
              placeholder="Enter your email address"
              type="text"
            />
            <input
              className="input"
              value="Password"
              placeholder="Enter your password"
              type="password"
              defaultValue="Password"
            />
          </div>
          <div className="already-have-an-container">
            <span>{`Already have an account? `}</span>
            <span className="login-here">Login here</span>
          </div>
          <button className="button" type='button'>
            <b className="get-started">Sign Up</b>
          </button>
          <button className="button1" type='button'>
            <img
              className="flat-color-iconsgoogle"
              alt=""
              // src="/flatcoloriconsgoogle.svg"
            />
            <b className="sign-up-with">Sign up with Google</b>
          </button>
        </div>
      </div>
      <div className="testimonials">
        <div className="carousel">
          <div className="carousel-child" />
          <div className="carousel-item" />
          <div className="carousel-item" />
          <div className="carousel-item" />
        </div>
        <div className="testimonial">
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet consectetur. Elit nulla tincidunt nam
            imperdiet in interdum. Pellentesque felis ac laoreet sed mi. Lorem
            ipsum dolor sit amet consectetur. Elit nulla tincidunt nam imperdiet
            in interdum. Pellentesque felis ac laoreet sed mi.
          </div>
          <div className="frame-parent">
            <div className="john-doe-parent">
              <b className="john-doe">John Doe</b>
              <div className="ceo-eden-life">CEO Eden Life</div>
            </div>
            <img className="frame-child" alt="" src="/rectangle-24@2x.png" />
          </div>
          <img
            className="testimonial-child"
            alt=""
            // src="/frame-1000004642.svg"
          />
        </div>
        <div className="carousel1">
          <div className="carousel-child1" />
          <div className="carousel-child2" />
          <div className="carousel-child1" />
        </div>
      </div>
    </div>
  );
};

