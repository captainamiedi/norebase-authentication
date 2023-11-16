"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./sign-up1.css");
var _flatColorIcons_google = _interopRequireDefault(require("../assest/flat-color-icons_google.png"));
var _edenLife = _interopRequireDefault(require("../assest/edenLife.png"));
var _reactRouterDom = require("react-router-dom");
var _lucideReact = require("lucide-react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Signup = function Signup(_ref) {
  var setStep = _ref.setStep,
    handleChange = _ref.handleChange,
    handleFirstSubmit = _ref.handleFirstSubmit,
    loading = _ref.loading,
    handleGoogleSignin = _ref.handleGoogleSignin;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-up-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "question"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sign-up-on-norebase-parent"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "sign-up-on"
  }, "Sign up on Norebase "), /*#__PURE__*/_react.default.createElement("div", {
    className: "norebase-is-the"
  }, "Norebase is the easiest way to start, scale and operate your business like a pro lorem ipsum dolor")), /*#__PURE__*/_react.default.createElement("form", {
    className: "input-parent",
    onSubmit: handleFirstSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "Email",
    className: "auth-label"
  }, "Email"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    id: "Email",
    placeholder: "Enter your email address",
    type: "text",
    required: true,
    name: "email",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingBottom: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password",
    className: "auth-label"
  }, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    placeholder: "Enter your password",
    type: "password",
    id: "password",
    name: "password",
    required: true,
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    type: "submit",
    disabled: loading
  }, loading ? /*#__PURE__*/_react.default.createElement(_lucideReact.Loader, null) : /*#__PURE__*/_react.default.createElement("h5", {
    className: "get-started"
  }, "Sign Up")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button1",
    type: "button",
    onClick: handleGoogleSignin
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "flat-color-iconsgoogle",
    alt: "",
    src: _flatColorIcons_google.default
  }), /*#__PURE__*/_react.default.createElement("h5", {
    className: "sign-up-with"
  }, "Sign up with Google"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "already-have-an-container"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Already have an account? "), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "login-here"
  }, "Login here")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonials"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-item"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-item"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-item"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonial"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lorem-ipsum-dolor"
  }, "Lorem ipsum dolor sit amet consectetur. Elit nulla tincidunt nam imperdiet in interdum. Pellentesque felis ac laoreet sed mi. Lorem ipsum dolor sit amet consectetur. Elit nulla tincidunt nam imperdiet in interdum. Pellentesque felis ac laoreet sed mi."), /*#__PURE__*/_react.default.createElement("div", {
    className: "frame-parent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "john-doe-parent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ceo-name"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "john-doe"
  }, "John Doe"), /*#__PURE__*/_react.default.createElement("p", {
    className: "ceo-eden-life"
  }, "CEO Eden Life"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "testimonial-child",
    alt: "",
    src: _edenLife.default
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child2"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-child1"
  }))));
};
var _default = exports.default = Signup;