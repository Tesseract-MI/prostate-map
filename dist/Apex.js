"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Enums = require("./Enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Apex =
/*#__PURE__*/
function (_Component) {
  _inherits(Apex, _Component);

  function Apex() {
    _classCallCheck(this, Apex);

    return _possibleConstructorReturn(this, _getPrototypeOf(Apex).apply(this, arguments));
  }

  _createClass(Apex, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        width: 140.337,
        height: 130.271,
        viewBox: "0 0 131.566 122.129"
      }, _react.default.createElement("text", {
        style: {
          lineHeight: '125%',
          InkscapeFontSpecification: "'sans-serif Medium'",
          textAlign: 'start'
        },
        x: 440.768,
        y: 337.183,
        fontWeight: 500,
        fontSize: 17.5,
        fontFamily: "sans-serif",
        letterSpacing: 0,
        wordSpacing: 0,
        fill: "#85c5eb",
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        x: 440.768,
        y: 337.183
      }, _Enums.directions.right)), _react.default.createElement("text", {
        y: 336.683,
        x: 560.993,
        style: {
          lineHeight: '125%',
          InkscapeFontSpecification: "'sans-serif Medium'",
          textAlign: 'start'
        },
        fontWeight: 500,
        fontSize: 17.5,
        fontFamily: "sans-serif",
        letterSpacing: 0,
        wordSpacing: 0,
        fill: "#85c5eb",
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        id: "L",
        y: 336.683,
        x: 560.993,
        onClick: this.props.setDirection
      }, _Enums.directions.left)), _react.default.createElement("path", {
        d: "M58.905 12.895c-5.27.383-10.55 1.161-15.644 2.563-2.368.798-11.748 3.704-11.137 5.834.594 1.634 3.477-.052 5.215 0 1.332.04 3.187.316 4.154 1.414.995 1.13.841 2.922.904 4.426.058 1.376-1.583 3.27-.484 4.104.814.618 1.01.54 1.813-.134.803-.674 2.213-1.944 3.14-2.71 1.856-1.533 4.098-2.052 6.206-2.239 1.903-.13 3.96.298 5.568 1.326 1.927 1.232 3.33 3.295 4.243 5.392 1.488 3.417 1.68 7.321 1.723 11.048.034 2.82-.243 5.655-1.105 8.386-.91 2.609-2.374 6.64-2.803 8.495-.429 1.855 2.751.06 4.125.13 1.686.089 3.979 1.67 5.052.367.523-.636-.407-1.652-.65-2.385-.89-2.688-1.895-5.254-2.278-8.001a35.932 35.932 0 01.002-9.732c.327-2.422.914-4.854 1.944-7.07.965-2.076 2.05-4.298 3.89-5.658.986-.728 2.29-.966 3.51-1.101 2.101-.233 4.242.144 6.321.53 2.087.385 4.338 2.936 6.114 1.775 1.632-1.067.013-3.999.76-5.8.305-.735.799-1.442 1.455-1.892 1.365-.936 4.5.23 4.762-1.405.3-1.861-2.965-2.373-4.65-3.219-2.723-1.366-5.702-2.196-8.662-2.916-2.686-.654-5.442-1.028-8.196-1.263-5.08-.433-10.207-.634-15.291-.265z",
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("path", {
        d: "M42.657 32.209c-1.439 1.683-2.623 3.588-3.657 5.546-1.155 2.19-2.183 4.48-2.812 6.875-.635 2.417-1.03 4.94-.938 7.438.09 2.421.3 4.986 1.438 7.125a12.235 12.235 0 004.812 4.875c2.765 1.519 6.11 2.296 9.25 2 2.208-.208 4.393-1.21 6.125-2.594 1.423-1.137 2.263-2.868 3.188-4.437 1.31-2.224 2.519-4.544 3.312-7a25.272 25.272 0 001.188-6.407c.182-3.437.001-6.948-.797-10.296-.355-1.49-.881-2.988-1.75-4.25-1.132-1.645-2.545-3.275-4.36-4.11-1.953-.9-4.291-1.025-6.416-.688-1.484.235-2.846 1.038-4.115 1.844-1.592 1.013-3.158 2.545-4.468 4.079zM89.646 32.412c1.51 1.733 2.43 3.922 3.344 6.031 1 2.31 1.818 4.72 2.312 7.187.489 2.44.764 4.954.625 7.438-.137 2.46-.306 5.061-1.437 7.25-1.002 1.938-2.6 3.68-4.5 4.75-2.75 1.547-6.103 2.213-9.25 2-2.223-.15-4.38-1.12-6.281-2.281-1.492-.91-2.851-2.125-3.844-3.563-1.464-2.118-2.242-4.668-2.906-7.156-.636-2.382-.958-4.862-1.003-7.327-.054-2.994.206-6.024.893-8.939.406-1.721.977-3.442 1.887-4.96 1.083-1.807 2.28-3.8 4.152-4.766 1.966-1.014 4.404-.88 6.604-.65 1.662.175 3.51.71 4.779 1.517 1.592 1.012 3.36 2.016 4.625 3.469z",
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("path", {
        style: {
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1
        },
        d: "M96.41 20.3c-1.743 1.868-5.634.834-6.578 3.742-.553 2.044.109 4.463-1.348 6.16 1.042 2.736 3.594 4.794 4.43 7.722 2.956 6.768 4.414 14.84 1.813 21.913-2.715 5.637-7.38 10.258-13.396 12.203-3.617 1.129-8.143 3.785-11.777 1.447-1.98-1.499-1.782-5.623-4.523-6.059-.677.368-1.014.176-1.434.895-.42.72-.923 2.35-1.308 3.111-.385.762-.807 1.468-1.378 1.964-.57.496-1.29.782-2.269.704-6.22-.813-12.875-2.96-17.318-7.652-3.933-4.616-7.019-10.503-6.094-16.75.203-6.51 3.724-12.083 6.872-17.543-.73-2.548.365-5.602-.203-8.327-1.933-3.633-6.73-1.207-9.756-2.33-.013-2.09-2.512-.269-3.37.203C14.474 29.606 2.705 44.606 2.871 61.5c.973 11.954 5 23.828 11.88 33.684 4.19 5.388 10.538 10.294 17.774 9.289 10.024-.444 19.262-5.185 29.228-5.977 8.892-1.773 17.593 1.354 25.928 4.023 6.708 1.178 14.248 1.907 20.468-1.456 10.437-6.523 14.53-19.05 17.557-30.309 3.273-11.74.648-24.957-7.451-34.17-5.874-6.886-13.116-13.07-21.654-16.282l-.141-.004-.051.003z",
        color: "#000",
        overflow: "visible",
        fill: "#f1c3cf",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 0.177
      }), _react.default.createElement("path", {
        d: "M33.803 19.17c-2.22 1.073-5.901 2.633-8.574 4.42a61.357 61.357 0 00-10.43 8.839 47.93 47.93 0 00-6.275 8.308c-1.665 2.784-3.095 5.745-4.066 8.84a39.376 39.376 0 00-1.768 9.899c-.116 2.48.19 4.978.62 7.424.838 4.78 2.157 9.488 3.8 14.054.964 2.68 2.238 5.243 3.535 7.778 1.082 2.115 2.102 4.294 3.536 6.187 1.572 2.076 3.4 4.002 5.48 5.569 2.17 1.634 4.541 3.168 7.16 3.889 2.132.587 4.42.388 6.629.265 2.35-.13 4.678-.578 6.982-1.06 5.345-1.12 10.507-3.525 15.822-4.243 3.788-.518 7.579-1.255 11.402-1.238 3.026.014 6.056.43 9.015 1.061 4.257.906 8.178 3.132 12.463 3.89 8.32 1.263 16.917 1.12 22.679-4.422 2.49-2.409 4.746-5.111 6.562-8.062 2.034-3.304 3.445-6.972 4.75-10.625 1.548-4.331 2.961-8.762 3.625-13.313.503-3.443.703-6.986.25-10.437-.559-4.262-1.77-8.497-3.625-12.375-1.433-2.998-3.586-5.613-5.687-8.188a48.397 48.397 0 00-5.25-5.5c-2.419-2.158-5.042-4.093-7.75-5.875-2.26-1.487-4.654-2.767-7.063-4a36.995 36.995 0 00-2.382-1.093c-.315-.133.558.792.507 1.234-.04.358-.315.698-.625.883-.712.424-1.669.078-2.468.297-.79.216-1.645.44-2.25.992-.493.45-.805 1.104-.969 1.75-.276 1.09.13 2.254.031 3.375-.04.467-.025.976-.258 1.383-.209.365-.57.653-.953.828-.332.152-1.04-.144-1.086.156-.073.48.854.89 1.313 1.235.656.492 1.134 1.19 1.64 1.835.638.815 1.25 1.658 1.75 2.563.758 1.372 1.31 2.85 1.875 4.312.42 1.088.82 2.188 1.125 3.313.324 1.19.576 2.403.75 3.625.222 1.552.378 3.12.375 4.687-.003 1.955-.07 3.934-.484 5.844-.212.98-.534 1.932-1.016 2.828-1.595 2.752-3.522 5.586-5.7 7.493-1.94 1.658-4.242 2.924-6.627 3.833-3.78 1.442-8.085 3.848-11.886 2.461-2.672-.974-2.435-6.786-5.277-6.702-2.52.075-2.043 5.126-4.32 6.21-2.219 1.058-4.719.557-7.354-.545-3.363-1.408-7.312-2.14-10.12-4.616-2.808-2.476-4.96-6.41-6.761-9.58-1.04-1.827-1.127-4.095-1.17-6.196-.07-3.48.488-7.008 1.523-10.332.626-2.008 1.717-3.85 2.787-5.661.964-1.631 2.2-3.533 3.257-4.658.276-.294-.713-.425-.945-.754a1.563 1.563 0 01-.3-.864c.78-2.422 1.499-5.784-.13-7.691-1.025-1.129-2.864-1.166-4.382-1.313-1.517-.146-3.164 1.086-4.55.452-.257-.117-.505-.41-.49-.692.049-.878 2.612-2.393 1.748-1.976z",
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("path", {
        style: {
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1
        },
        d: "M64.735 61.146c-4.22.304-8.631 2.217-10.717 6.095-.859 1.63-2.153 3.22-2.434 5.057 1.192 1.188 3.122 1.299 4.688 1.754.888.028 2.344.765 2.905-.193.023-2.157-1.614-4.24-.439-6.37.766-2.801 3.747-4.27 6.5-4.02 1.709-.04 3.69.571 4.702 2.008.85 2.692-.266 5.469-.231 8.175 1.522 1.3 3.851.903 5.677.538 1.155-.34 3.282-.907 2.896-2.492-.945-2.894-2.535-5.71-5.269-7.248-2.494-1.526-5.256-3.305-8.278-3.304z",
        color: "#000",
        overflow: "visible",
        fill: "#908147",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 0.089
      }), _react.default.createElement("path", {
        style: {
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1
        },
        d: "M53.147 26.319c-4.81-.032-8.381 3.826-11.342 7.152-3.845 5.546-6.815 12.127-6.372 19.023-.235 4.463 1.833 9.025 5.797 11.274 4.954 3.17 12.49 3.338 16.503-1.439 4.141-5.42 7.028-12.123 6.675-19.057-.034-5.584-.714-12.486-5.986-15.67-1.577-.951-3.449-1.32-5.275-1.283zM77.442 27.423c-3.358-.294-6.128 2.087-7.56 4.931-3.862 7.309-3.893 16.258-1.472 24.032 1.83 6.697 8.91 11.79 15.88 10.406 5.273-.496 10.364-4.329 11.123-9.782 1.392-8.387-.848-17.347-5.795-24.223-2.883-3.686-7.545-5.579-12.176-5.364z",
        color: "#000",
        overflow: "visible",
        fill: "#fef700",
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 0.126
      }), _react.default.createElement("path", {
        style: {
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1
        },
        d: "M63.376 12.955c-10.242.007-20.815 1.58-29.857 6.63-1.173.374-1.52 2.227.023 2.24 2.675-.323 6.344-1.314 8.225 1.324 1.443 2.526-.063 5.46.344 8.077 1.207.762 2.286-1.185 3.232-1.717 2.936-3.002 7.651-3.98 11.62-2.835 5.581 2.214 7.458 8.779 7.496 14.246.132 4.923.025 9.963-2.01 14.546-.552 1.923-1.49 3.773-1.703 5.759 1.527.699 2.85-.91 4.524-.356 1.108.033 4.084 1.747 4.603.083-.662-3.192-2.56-6.253-2.814-9.563-.772-7.385-.504-15.623 4.457-21.629 2.462-3.27 7.052-2.625 10.576-1.937 2.308.156 4.384 2.778 6.711 1.578 1.33-2.151-.558-5.509 1.894-7.17 1.198-1.271 5.516.156 4.553-2.588-3.107-2.33-7.04-3.39-10.688-4.622-6.874-1.93-14.1-2.01-21.186-2.066z",
        color: "#000",
        overflow: "visible",
        fill: "#0092ff",
        fillOpacity: 0.882,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 0.126
      }), _react.default.createElement("path", {
        d: "M58.771 74.34c1.745-.027-.693-3.5-.4-5.221.24-1.403.75-2.865 1.72-3.907.802-.863 1.977-1.385 3.124-1.656 1.248-.294 2.606-.237 3.844.094 1.031.276 2.195.66 2.813 1.531.598.844.481 2.028.5 3.063-.037 1.848-.414 3.786-.805 5.234.333.712 1.36.863 2.133 1.008 1.203.226 2.483.068 3.664-.258 1.068-.295 2.476-.506 2.967-1.5.369-.746-.169-1.674-.46-2.453a12.346 12.346 0 00-2.156-3.688c-.87-1.017-2.003-1.787-3.11-2.54-.866-.588-1.777-1.127-2.743-1.532-1.578-.662-3.217-1.402-4.928-1.439-3.678.384-7.224 1.579-9.437 4.261-.582.698-1.142 1.419-1.625 2.188-.963 1.56-2.127 3.981-2.384 4.979 1.673 1.012 5.501 1.862 7.283 1.835z",
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 488.921,
        y: 345.345,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.as,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 488.921,
        y: 345.345,
        fontSize: 8.872
      }, _Enums.zones.as)), _react.default.createElement("text", {
        y: 367.935,
        x: 485.867,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 9.373,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.tza,
        direction: _Enums.directions.right,
        y: 367.935,
        x: 485.867,
        fontSize: 5.858,
        onClick: this.props.onZoneChange
      }, 'TZa')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 481.628,
        y: 383.247,
        fontWeight: 400,
        fontSize: 9.373,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: "TZp",
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 481.628,
        y: 383.247,
        fontSize: 5.858
      }, 'TZp')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 540.789,
        y: 405.719,
        fontWeight: 400,
        fontSize: 13.434,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pzpl,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        x: 540.789,
        y: 405.719,
        fontSize: 8.396
      }, 'PZpl')), _react.default.createElement("text", {
        y: 372.485,
        x: 543.971,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 13.434,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pza,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        y: 372.485,
        x: 543.971,
        fontSize: 8.396
      }, 'PZa')), _react.default.createElement("path", {
        d: "M34.89 51.458l4.966 51.536M96.515 51.458l-6.534 51.411M96.515 51.458l30.59 10.786M35.23 50.958L3.016 61.619M35.23 50.958L3.016 61.619M65.48 68.083l.16 29.536M65.48 13.583l.16 46.536M35.298 51.023l27.906.084M67.173 51.023l27.906.084",
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.355,
        strokeDasharray: "4.2585744,4.2585744"
      }), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 512.56,
        y: 368.466,
        fontWeight: 400,
        fontSize: 9.373,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.tza,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        x: 512.56,
        y: 368.466,
        fontSize: 5.858
      }, 'TZa')), _react.default.createElement("text", {
        y: 383.071,
        x: 518.044,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 9.373,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: "TZp",
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        y: 383.071,
        x: 518.044,
        fontSize: 5.858
      }, 'TZp')), _react.default.createElement("text", {
        y: 403.969,
        x: 450.789,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 13.434,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pzpl,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        y: 403.969,
        x: 450.789,
        fontSize: 8.396
      }, 'PZpl')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 451.471,
        y: 369.235,
        fontWeight: 400,
        fontSize: 13.434,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pza,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 451.471,
        y: 369.235,
        fontSize: 8.396
      }, 'PZa')), _react.default.createElement("text", {
        y: 411.825,
        x: 508.443,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 11.026,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pzpm,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        y: 411.825,
        x: 508.443,
        fontSize: 6.891
      }, 'PZpm')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 481.705,
        y: 411.735,
        fontWeight: 400,
        fontSize: 11.026,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pzpm,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 481.705,
        y: 411.735,
        fontSize: 6.891
      }, 'PZpm')), _react.default.createElement("text", {
        y: 345.345,
        x: 508.72,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.as,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        y: 345.345,
        x: 508.72,
        fontSize: 8.872
      }, _Enums.zones.as)), _react.default.createElement("text", {
        y: 440.041,
        x: 490.875,
        style: {
          lineHeight: '125%',
          InkscapeFontSpecification: "'sans-serif Medium'",
          textAlign: 'start'
        },
        fontWeight: 500,
        fontSize: 17.5,
        fontFamily: "sans-serif",
        letterSpacing: 0,
        wordSpacing: 0,
        fill: "#85c5eb",
        transform: "translate(-439.931 -322.726)"
      }, _react.default.createElement("tspan", {
        style: {
          InkscapeFontSpecification: "'sans-serif Medium'"
        },
        y: 440.041,
        x: 490.875,
        fontSize: 15
      }, 'Apex')), _react.default.createElement("g", {
        cursor: "pointer",
        fill: "none"
      }, _react.default.createElement("path", {
        d: "M34.464 51.772l-14.821 4.285L3.036 61.95 5 73.38l5.893 15.714 7.857 10.893 10.179 5 10.535-1.429zM95.337 51.772l14.821 4.285 16.608 5.893L124.8 73.38l-5.893 15.714-7.857 10.893-10.178 5-10.536-1.429zM31.429 20.164l-11.965 7.768-6.875 6.607-6.785 11.875-2.947 11.161-.09 3.75L35.09 50.968l.982-6.696 3.304-8.036 3.214-4.107-.803-4.107.893-2.054s-.536-3.125-1.429-3.571c-.893-.447-2.946-.715-2.946-.715l-4.108.268-2.142-.714zM99.555 20.164l11.964 7.768 6.875 6.607 6.786 11.875 2.946 11.161.09 3.75-32.322-10.357-.982-6.696-3.303-8.036-3.215-4.107.804-4.107-.893-2.054s.536-3.125 1.429-3.571c.892-.447 2.946-.715 2.946-.715l4.107.268 2.143-.714z"
      }), _react.default.createElement("path", {
        d: "M32.262 20.23l4.924-2.589 6.819-2.399 6.755-1.136 5.872-1.074 5.997-.126h3.157l-.072 47.705-4.732 1.071-.357-1.964 2.946-7.59 1.161-6.785-.625-8.482-3.036-7.41-3.392-2.59-3.661-.893-4.018.536-3.482 1.875-2.232 2.053-.893.625-.982-2.589.714-2.143.446-1.34-1.607-3.303-1.875-.625s-4.018-.357-4.375-.357c-.357 0-1.16.357-1.16.357z"
      }), _react.default.createElement("path", {
        d: "M98.98 20.23l-4.925-2.589-6.819-2.399-6.755-1.136-5.872-1.074-5.998-.126h-3.156l.072 47.705 4.732 1.071.357-1.964-2.947-7.59-1.16-6.785.625-8.482 3.035-7.41 3.393-2.59 3.661-.893 4.018.536 3.482 1.875 2.232 2.053.893.625.982-2.589-.714-2.143-.447-1.34 1.608-3.303 1.875-.625s4.017-.357 4.375-.357c.357 0 1.16.357 1.16.357zM35.355 55.522l4.61 48.36 5.05-1.704 4.356-1.262 4.167-1.01 7.197-1.453 4.799-.378V67.896l-.316-.568-2.02 2.21-.695 2.525-1.389 1.894-1.768.505s-2.525.316-2.967.316c-.442 0-9.091-3.346-9.091-3.346l-8.018-6.566zM95.014 56.926l-4.476 46.976-4.906-1.656-4.232-1.226-4.048-.981-6.99-1.41-4.662-.369V68.946l.307-.552 1.962 2.147.675 2.453 1.35 1.84 1.716.49s2.453.307 2.883.307c.429 0 8.83-3.25 8.83-3.25l7.79-6.379zM51.707 26.543c-.315-.063-7.197 3.978-7.197 3.978l-2.778 3.788-4.104 6.881-1.515 4.799-.631 4.545h27.463s.505-1.326.568-1.641l.884-4.483-.757-7.513-2.968-6.945-3.535-2.778-4.104-.757z"
      }), _react.default.createElement("path", {
        d: "M79.796 26.543c.316-.063 7.197 3.978 7.197 3.978l2.778 3.788 4.104 6.881 1.515 4.799.631 4.545H68.558s-.505-1.326-.568-1.641l-.884-4.483.757-7.513 2.968-6.945 3.535-2.778 4.104-.757zM35.86 51.355l26.959.19-2.589 6.565-3.725 5.304-4.166 1.83-3.6.316s-3.913-.505-4.166-.568c-.253-.063-2.967-1.452-3.22-1.705-.252-.252-2.525-1.767-2.652-2.083-.126-.316-1.2-3.03-1.262-3.283-.063-.253-1.705-3.41-1.705-3.41zM95.119 51.86l-26.959.19 2.589 6.565 3.725 5.304 4.167 1.83 3.598.316s3.915-.505 4.167-.568c.253-.063 2.968-1.452 3.22-1.705.253-.252 2.526-1.767 2.652-2.083.126-.316 1.2-3.03 1.262-3.283.064-.253 1.705-3.41 1.705-3.41z"
      })));
    }
  }]);

  return Apex;
}(_react.Component);

_defineProperty(Apex, "propTypes", {
  onZoneChange: _propTypes.default.func.isRequired
});

var _default = Apex;
exports.default = _default;