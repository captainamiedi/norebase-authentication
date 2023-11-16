import React from 'react'

export default function ResetPassword({handleResend}) {
  return (
    <>
      <div className="sign-up-on-norebase-parent">
      <h1 className="sign-up-on">{`Forget Password `}</h1>
      <div className="norebase-is-the">
        We have sent a confirmation link to username@email.com Use the provided link to reset your password
      </div>
    </div>
    <div style={{width: '100%'}}>
      <p className='receive-email'>Didn’t receive email? <span role='button' onClick={handleResend}>Resend</span> 04:47</p>
    </div>
    </>
  )
}
