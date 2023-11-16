import React, { useState } from 'react'
import './sign-up1.css'
import GoogleImg from '../assest/flat-color-icons_google.png'
import EdenLife from '../assest/edenLife.png'
import { Link } from 'react-router-dom'
import ResetPassword from './ResetPassword'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebaseSetup'
import { Loader } from 'lucide-react';

export default function ForgotPassword() {
    const [data, setData] = useState({})
    const [waitingForPassword, setWaitingForPassword] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const handleSubmit =async (e) => {
        e.preventDefault()
        console.log(data, 'final');
        const {email} = data
        setIsLoading(true);
        const user = await sendPasswordResetEmail(auth, email)
        setIsLoading(false)
        setWaitingForPassword(true)
    }

    const handleChange = ({target: {name, value}}) => {
        setData({...data, [name]: value})
    }

    const handleResend = () => {
        setWaitingForPassword(false)
    }
    
  return (
    <div className="sign-up-1">
    <div className="modal">
      {!waitingForPassword && <div className="question">
        <div className="sign-up-on-norebase-parent">
          <h1 className="sign-up-on">{`Forget Password `}</h1>
          <div className="norebase-is-the">
            Fill in the email address you signed up with and we’ll send you a link to reset your password
          </div>
        </div>
        <form className="input-parent" onSubmit={handleSubmit}>
        <div style={{paddingBottom: '1rem'}}>
          <label htmlFor='Email' className='auth-label'>Email Address</label>
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
          <div className='pcb-1'>
          <button className="button" type='submit' disabled={loading}>
            {loading ? <Loader /> : <h5 className="get-started">Send Link</h5>}
          </button>
          </div>
        </form>
        <div style={{textAlign: 'center', paddingTop: '1.5rem'}}>
            <Link to='/' className='back-to-sign'>Back to <span>Sign in</span></Link>
        </div>
      </div>}
      {waitingForPassword && <ResetPassword handleResend={handleResend}/>}
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
