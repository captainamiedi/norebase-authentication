import React, { useState } from 'react'
import Signup from '../components/Signup';
import SignUp2 from '../components/Welcome';
import SignUp3 from '../components/SignupThree';
import SignUp4 from '../components/SignupFour';
import { auth } from '../firebaseSetup';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { firebaseErrorHandling } from '../utils/ErrorHandling';

const StartSignup = ({routeAfterSignup}) => {
  const [step, setStep] = useState(1)
  const [signupData, setSignupData] = useState({})
  const [loading, setIsLoading] = useState(false)
  const [firebaseUser, setFirebaseUser] = useState(null)

  const navigate = useNavigate()
  const handleChange = ({target: {name, value}}) => {
    setSignupData({...signupData, [name]: value})
  }

  const provider = new GoogleAuthProvider();

  const handleFirstSubmit = async (e) => {
    e.preventDefault()
    console.log(signupData, 'data');
    if (step === 1) {
      try {
        setIsLoading(true)
        const {email, password} = signupData
        const userData = await createUserWithEmailAndPassword(auth, email, password)
        const user = userData.user
        setFirebaseUser(user)
        const token = await user.getIdToken()
        localStorage.setItem('access_token', token)
        setIsLoading(false)
        setStep(step + 1)
      } catch (error) {
        console.log(error, 'sign up error');
        setIsLoading(false)
        firebaseErrorHandling(error.code)
      }
    }
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    console.log(signupData, 'final');
    try {
      setIsLoading(true)
      const {fullName} = signupData
      await updateProfile(firebaseUser, {
        displayName: fullName,
      })
      setIsLoading(false)
      navigate(routeAfterSignup)
    } catch (error) {
      console.log(error, 'update profile error');
      setIsLoading(false)
    }
  }

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
  .then(async(result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = await user.getIdToken();
    console.log(token, 'token');
    localStorage.setItem('access_token', token)
    // The signed-in user info.
    // console.log(await user.getIdToken(), 'users');
    const userDetails = {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber
    }
    localStorage.setItem('userDetails', userDetails)
    navigate(routeAfterSignup)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  const handleRenderPage = (componentStep) => {
    switch (componentStep) {
      case 1:
        return <Signup setStep={setStep} handleChange={handleChange} handleFirstSubmit={handleFirstSubmit} loading={loading} handleGoogleSignin={handleGoogleSignin}/>
      case 2: 
        return <SignUp2 setStep={setStep} handleChange={handleChange} handleFirstSubmit={handleSubmit} loading={loading} />
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