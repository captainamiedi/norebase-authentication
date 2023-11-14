import React, {useState} from 'react'
import './sign-up1.css'
import GoogleImg from '../assest/flat-color-icons_google.png'
import EdenLife from '../assest/edenLife.png'

export default function Login() {
    const [data, setData] = useState({})

    const handleChange = ({target: {name, value}}) => {
        let temp = {...data}
        temp[name] = value
        setData(temp)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data, 'login data');
    }
    return (
        <div className="sign-up-1">
          <div className="modal">
            <div className="question">
              <div className="sign-up-on-norebase-parent">
                <h1 className="sign-up-on">Login to Norebase</h1>
                <div className="norebase-is-the">
                  Norebase is the easiest way to start, scale and operate your
                  business like a pro lorem ipsum dolor
                </div>
              </div>
              <form className="input-parent" onSubmit={handleSubmit}>
              <div style={{paddingBottom: '1rem'}}>
                <label htmlFor='Email' className='auth-label'>Email</label>
                <input
                  className="input"
                  id="Email"
                  placeholder="Enter your email address"
                  type="text"
                  required
                  name='email'
                  onChange={handleChange}
                />
    
              </div>
              <div style={{paddingBottom: '1rem'}}>
                <label htmlFor="password" className='auth-label'>Password</label>
                <input
                  className="input"
                  placeholder="Enter your password"
                  type="password"
                  id='password'
                  name='password'
                  required
                  onChange={handleChange}
                />
                <div className='forget-password-container'>
                    <h5 className='forget-password' role='button'>Forgot password?</h5>
                </div>
              </div>
                <div className='pcb-1'>
                <button className="button" type='submit'>
                  <h4 className="get-started">Login</h4>
                </button>
                </div>
              </form>
    
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
                <span>{`New to Norebase? `}</span>
                <span className="login-here">Sign up here</span>
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
}
