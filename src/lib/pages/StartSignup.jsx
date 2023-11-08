import React, { useState } from 'react'
import Signup from '../components/Signup';
import SignUp2 from '../components/Welcome';
import SignUp3 from '../components/SignupThree';
import SignUp4 from '../components/SignupFour';

export default function StartSignup() {
  const [step, setStep] = React.useState(1)

  const handleRenderPage = (componentStep) => {
    switch (componentStep) {
      case 1:
        return <Signup setStep={setStep}/>
      case 2: 
        return <SignUp2 setStep={setStep}/>
      case 3:
        return <SignUp3 setStep={setStep} />
      case 4:
        return <SignUp4 setStep={setStep} />
      default:
        return <Signup setStep={setStep} />
    }
  }
  return (
    <>
       {handleRenderPage(step)} 
    </>
  )
}
