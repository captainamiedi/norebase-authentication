import {toast} from 'react-toastify'

export const firebaseErrorHandling  = (code) => {
    switch (code) {
        case 'auth/email-already-exists':
            toast.error('Email Already exist!')
            break;
        case 'auth/invalid-email':
            toast.error('Invalid Email!')
            break;
        case 'auth/invalid-login-credentials':
            toast.error('Email or Password is invalid!')
            break;
        default:
            break;
    }
}