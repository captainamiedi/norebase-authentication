import React from 'react'
import './sign-up1.css'
import GoogleImg from '../assest/flat-color-icons_google.png'
import EdenLife from '../assest/edenLife.png'

const Signup = ({setStep}) => {
  return (
    <div className="sign-up-1">
      <div className="modal">
        <div className="question">
          <div className="sign-up-on-norebase-parent">
            <h1 className="sign-up-on">{`Sign up on Norebase `}</h1>
            <div className="norebase-is-the">
              Norebase is the easiest way to start, scale and operate your
              business like a pro lorem ipsum dolor
            </div>
          </div>
          <div className="input-parent">
          <div style={{paddingBottom: '1rem'}}>
            <label htmlFor='Email' className='auth-label'>Email</label>
            <input
              className="input"
              id="Email"
              placeholder="Enter your email address"
              type="text"
            />

          </div>
          <div style={{paddingBottom: '1rem'}}>
            <label htmlFor="password" className='auth-label'>Password</label>
            <input
              className="input"
              value="Password"
              placeholder="Enter your password"
              type="password"
              defaultValue="Password"
              id='password'
            />

          </div>
          </div>
          <div className='pcb-1'>
          <button className="button" type='button' onClick={() => setStep(2)}>
            <h5 className="get-started">Sign Up</h5>
          </button>

          </div>
          <div className="pcb-1">
            <button className="button1" type='button'>
              <img
                className="flat-color-iconsgoogle"
                alt=""
                src={GoogleImg}
              />
              <h5 className="sign-up-with">Sign up with Google</h5>
            </button>

          </div>
          <div className="already-have-an-container">
            <span>{`Already have an account? `}</span>
            <span className="login-here">Login here</span>
          </div>
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
              <div className='ceo-name'>
                <p className="john-doe">John Doe</p>
                <p className="ceo-eden-life">CEO Eden Life</p>

              </div>
            </div>
          <div>
            <img
              className="testimonial-child"
              alt=""
              src={EdenLife}
            />

          </div>
          </div>
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

export default Signup