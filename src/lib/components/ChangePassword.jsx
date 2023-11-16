import React, { useState } from 'react'
import './sign-up1.css'
import EdenLife from '../assest/edenLife.png'
import { Link } from 'react-router-dom'

export default function ChangePassword() {
    const [data, setData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data, 'final');
    }

    const handleChange = ({target: {name, value}}) => {
        setData({...data, [name]: value})
    }
  return (
    <div className="sign-up-1">
    <div className="modal">
      <div className="question">
        <div className="sign-up-on-norebase-parent">
          <h1 className="sign-up-on">{`Forget Password `}</h1>
          <div className="norebase-is-the">
            Password must be at least 8 characters long, alphanumeric, contain lower and upper caps and a special character
          </div>
        </div>
        <form className="input-parent" onSubmit={handleSubmit}>
        <div style={{paddingBottom: '1rem'}}>
          <label htmlFor='newPassword' className='auth-label'>New Password</label>
          <input
            className="input"
            id="newPassword"
            placeholder="Enter your password"
            type="password"
            required
            name='newPassword'
            onChange={handleChange}
          />
        </div>
        <div style={{paddingBottom: '1rem'}}>
          <label htmlFor='confirmPassword' className='auth-label'>Confirm Password</label>
          <input
            className="input"
            id="confirmPassword"
            placeholder="Enter your password"
            type="password"
            required
            name='confirmPassword'
            onChange={handleChange}
          />
        </div>
          <div className='pcb-1'>
          <button className="button" type='submit'>
            <h5 className="get-started">Set Password</h5>
          </button>
          </div>
        </form>
        <div style={{textAlign: 'center', paddingTop: '1.5rem'}}>
            <Link to='/' className='back-to-sign'>Back to <span>Sign in</span></Link>
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
  )
}
