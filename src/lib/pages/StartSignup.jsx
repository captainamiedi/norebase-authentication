import React, { useState } from 'react'
import Signup from '../components/Signup';
import SignUp2 from '../components/Welcome';
import SignUp3 from '../components/SignupThree';
import SignUp4 from '../components/SignupFour';

const StartSignup = () => {
  const [step, setStep] = useState(1)
  const [signupData, setSignupData] = useState({})
  const handleChange = ({target: {name, value}}) => {
    setSignupData({...signupData, [name]: value})
  }

  const handleFirstSubmit = (e) => {
    e.preventDefault()
    setStep(step + 1)
    console.log(signupData, 'data');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupData, 'final');
  }

  const handleRenderPage = (componentStep) => {
    switch (componentStep) {
      case 1:
        return <Signup setStep={setStep} handleChange={handleChange} handleFirstSubmit={handleFirstSubmit}/>
      case 2: 
        return <SignUp2 setStep={setStep} handleChange={handleChange} handleFirstSubmit={handleFirstSubmit} />
      // case 3:
      //   return <SignUp3 setStep={setStep} handleChange={handleChange} handleFirstSubmit={handleFirstSubmit} />
      // case 4:
      //   return <SignUp4 setStep={setStep} handleChange={handleChange} handleFirstSubmit={handleFirstSubmit} />
      default:
        return <Signup setStep={setStep} handleChange={handleChange} handleSubmit={handleSubmit} />
    }
  }

  return (
    <>
       {handleRenderPage(step)} 
    </>
  )
}

export default StartSignup