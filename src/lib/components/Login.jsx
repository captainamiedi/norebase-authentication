import React, {useState} from 'react'
import './sign-up1.css'
import GoogleImg from '../assest/flat-color-icons_google.png'
import EdenLife from '../assest/edenLife.png'
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebaseSetup'
import { firebaseErrorHandling } from '../utils/ErrorHandling'

export default function Login({routeAfterLogin}) {
    const [data, setData] = useState({})
    const [loading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = ({target: {name, value}}) => {
        let temp = {...data}
        temp[name] = value
        setData(temp)
    }

    console.log(auth.currentUser, 'user details');
    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
          // console.log(data, 'login data');
          setIsLoading(true)
          const {email, password} = data
          const userData = await signInWithEmailAndPassword(auth, email, password)
          const user = userData.user;
          const token = await user.getIdToken() 
          console.log(user);
          localStorage.setItem('userToken', token)
          setIsLoading(false)
          const userDetails = {
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            phoneNumber: auth.currentUser.phoneNumber
          }
          localStorage.setItem('userDetails', userDetails)
          // navigate(routeAfterLogin)
        } catch (error) {
          console.log(error, 'error');
          setIsLoading(false)
          firebaseErrorHandling(error.code)
        }
    }
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
      // console.log('google here');
      signInWithPopup(auth, provider)
    .then(async(result) => {
      console.log(result, 'result');
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
      navigate(routeAfterLogin)
    }).catch((error) => {
      // Handle Errors here.
      console.log(error, 'firebase google error');
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
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
                    <Link to='/forget-password' className='forget-password' role='button'>Forgot password?</Link>
                </div>
              </div>
                <div className='pcb-1'>
                <button className="button" type='submit'>
                  {loading ? <Loader /> : <h4 className="get-started">Login</h4>}
                </button>
                </div>
              </form>
    
              <div className="pcb-1">
                <button className="button1" type='button' onClick={handleGoogleSignin}>
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
                <Link to='/signup' className="login-here">Sign up here</Link>
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
