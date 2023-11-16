"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.auth = void 0;
var _app = require("firebase/app");
var _auth = require("firebase/auth");
var _analytics = require("firebase/analytics");
/* eslint-disable no-undef */

var firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};
var app = (0, _app.initializeApp)(firebaseConfig);
var analytics = (0, _analytics.getAnalytics)(app);
var auth = exports.auth = (0, _auth.getAuth)(app);
var _default = exports.default = app;