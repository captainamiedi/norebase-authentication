"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebaseErrorHandling = void 0;
var _reactToastify = require("react-toastify");
var firebaseErrorHandling = exports.firebaseErrorHandling = function firebaseErrorHandling(code) {
  switch (code) {
    case 'auth/email-already-exists':
      _reactToastify.toast.error('Email Already exist!');
      break;
    case 'auth/invalid-email':
      _reactToastify.toast.error('Invalid Email!');
      break;
    case 'auth/invalid-login-credentials':
      _reactToastify.toast.error('Email or Password is invalid!');
      break;
    default:
      break;
  }
};