"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _signUp2Module = _interopRequireDefault(require("./sign-up2.module.css"));
var _rightSm = _interopRequireDefault(require("../assest/right-sm.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SignUp2 = function SignUp2(_ref) {
  var handleChange = _ref.handleChange,
    handleFirstSubmit = _ref.handleFirstSubmit;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.signUp2
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.modal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.question
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.welcomeOnboardWedLikeToParent
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: _signUp2Module.default.welcomeOnboardWed
  }, "Welcome onboard, we\u2019d like to know your full name"), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp2Module.default.loremIpsumDolor
  }, "Lorem ipsum dolor sit amet consectetur.")), /*#__PURE__*/_react.default.createElement("form", {
    className: _signUp2Module.default.inputParent,
    onSubmit: handleFirstSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "fullName",
    className: "auth-label",
    style: {
      textAlign: 'justify'
    }
  }, "Full Name"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    placeholder: "Enter your full name",
    type: "text",
    id: "fullName",
    name: "fullName",
    required: true,
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1",
    style: {
      paddingBottom: '2rem',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "phoneNumber",
    className: "auth-label",
    style: {
      textAlign: 'justify'
    }
  }, "Phone Number"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    placeholder: "Enter your Phone number",
    type: "text",
    id: "phoneNumber",
    required: true,
    onChange: handleChange,
    name: "phoneNumber"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "pcb-1",
    style: {
      paddingBottom: '2rem',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "hearAbout",
    className: "auth-label",
    style: {
      textAlign: 'justify'
    }
  }, "How did you hear about us?"), /*#__PURE__*/_react.default.createElement("select", {
    id: "hearAbout",
    name: "hearAboutUs",
    className: "input",
    required: true,
    onChange: handleChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "LinkedIn"
  }, "LinkedIn"), /*#__PURE__*/_react.default.createElement("option", {
    value: "twitter"
  }, "Twitter"), /*#__PURE__*/_react.default.createElement("option", {
    value: "Instagram"
  }, "Instagram"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: _signUp2Module.default.button,
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _signUp2Module.default.getStarted
  }, "Next"), /*#__PURE__*/_react.default.createElement("img", {
    className: _signUp2Module.default.arrowrightSmIcon,
    alt: "",
    src: _rightSm.default
  })))))));
};
var _default = exports.default = SignUp2;