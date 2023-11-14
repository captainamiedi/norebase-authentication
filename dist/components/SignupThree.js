"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _rightSm = _interopRequireDefault(require("../assest/right-sm.png"));
var _signUp3Module = _interopRequireDefault(require("./sign-up3.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SignUp3 = function SignUp3(_ref) {
  var handleChange = _ref.handleChange,
    handleFirstSubmit = _ref.handleFirstSubmit;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp3Module.default.signUp3
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp3Module.default.modal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp3Module.default.question
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp3Module.default.niceToMeetYouJohnWhatIsParent
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: _signUp3Module.default.niceToMeet
  }, "Nice to meet you John, what is your phone number?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _signUp3Module.default.loremIpsumDolor
  }, "Lorem ipsum dolor sit amet consectetur.")), /*#__PURE__*/_react.default.createElement("form", {
    className: _signUp3Module.default.inputWrapper,
    onSubmit: handleChange
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "phoneNumber",
    style: {
      textAlign: 'justify'
    },
    className: "auth-label"
  }, "Phone Number"), /*#__PURE__*/_react.default.createElement("input", {
    className: "input",
    placeholder: "Enter your phone number",
    type: "tel",
    id: "phoneNumber",
    name: "phoneNumber",
    required: true,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingTop: '2rem'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: _signUp3Module.default.button,
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: _signUp3Module.default.getStarted
  }, "Next"), /*#__PURE__*/_react.default.createElement("img", {
    className: _signUp3Module.default.arrowrightSmIcon,
    alt: "",
    src: _rightSm.default
  })))))));
};
var _default = exports.default = SignUp3;