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

var Base =
/*#__PURE__*/
function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, _getPrototypeOf(Base).apply(this, arguments));
  }

  _createClass(Base, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        width: 195.297,
        height: 147.213,
        viewBox: "0 0 183.091 138.012" // {...props}

      }, _react.default.createElement("text", {
        style: {
          lineHeight: '125%',
          InkscapeFontSpecification: "'sans-serif Medium'",
          textAlign: 'start'
        },
        x: 480.743,
        y: 215.716,
        fontWeight: 500,
        fontSize: 17.5,
        fontFamily: "sans-serif",
        letterSpacing: 0,
        wordSpacing: 0,
        fill: "#85c5eb",
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        x: 480.743,
        y: 215.716
      }, 'R')), _react.default.createElement("text", {
        y: 215.973,
        x: 650.717,
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
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        y: 215.973,
        x: 650.717
      }, 'L')), _react.default.createElement("path", {
        d: "M172.363 34.386l7.493 16.653c2.433 5.409 2.901 17.566 2.901 17.566s.279 12.7-2.347 18.974c-1.97 4.704-5.872 9.973-9.718 13.32-4.998 4.35-11.033 7.548-17.212 9.937-5.703 2.206-11.805 3.315-17.796 4.531-4.07.827-8.223 1.447-12.37 1.68-1.598.09-5.166.084-5.166.084s15.952-10.954 21.574-17.78c8.595-12.432 12.668-24.42 15.857-38.96.812-4.698 1.478-4.95 2.869-15.456.67-5.069 2.766-10.994 5.382-10.89zM15.578 34.671s5.634-.561 7.818.742c5.515 5.04 5.782 14.22 6.94 21.126l3.371 14.905s4.595 15.225 8.467 22.096c3.397 6.026 7.141 12.083 12.733 16.388 4.954 3.813 16.812 8.31 16.812 8.31s-25.576-.78-36.411-4.163c-7.321-2.286-17.354-6.629-22.707-12.122-5.742-5.892-8.388-9.784-9.725-17.83-1.3-7.816-.358-20.53 1.909-28.116 2.281-7.637 10.793-21.336 10.793-21.336z",
        fill: "#f1c3cf",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("path", {
        d: "M137.42 74.915c-12.435 2.23-37.035 1.225-47.216.887-6.35-.211-37.527.931-41.252.025-9.047-5.661-17.942-17.315-17.942-17.315s-2.502-8.841-2.187-12.922c.295-3.827 1.868-7.166 3.576-10.603 1.757-3.535 3.18-6.292 5.96-9.096 2.355-2.376 5.386-4.857 8.25-6.587 3.17-1.916 6.466-3.802 10.005-4.894 2.589-.798 6.2-1.576 8.909-1.63 2.188-.045 5.306.318 7.34 1.129 8.203 3.817 14.88 15.134 16.75 21.078.297 10.53.57 23.176 3.513 23.589 2.417-.028 2.912-13.62 3.617-22.352 1.318-7.07 3.422-9.737 7.188-14.258 2.305-2.701 4.392-4.607 7.513-6.3 5.566-2.423 12.623-2.963 18.072-1.606 14.24 2.915 22.01 13.678 25.281 22.471 2.501 6.42 3.017 12.09 1.19 21.543-4.866 7.04-10.398 15.146-18.568 16.84z",
        fill: "#fef700",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("path", {
        d: "M156.017 58.754s-.403 1.537-1.049 3.918c-.646 2.38-1.41 5.824-2.386 9.199-1.608 5.562-4.204 11.541-5.568 14.817-1.68 4.332-3.804 7.613-5.797 10.454-1.992 2.84-4.164 5.117-6.565 7.19-4.8 4.148-9.73 7.517-16.734 12.944 0 0-16.086.796-24.746 1.052-4.33.129-8.871.306-13.342.12-2.235-.092-5.516.07-7.681-.255s-3.215-1.135-5.24-1.794c-1.6-.52-3.095-1.409-4.517-2.07a31.022 31.022 0 01-4.075-2.275c-1.306-.865-2.444-1.379-3.696-2.51-1.252-1.133-3.18-2.757-4.442-4.218-5.859-6.789-9.469-14.597-12.903-22.88-3.146-7.59-6.368-23.91-6.368-23.91s10.221 13.259 17.789 16.353c5.272 2.157 17.086.824 17.086.824 8.222.14 16.773-.368 27.264-.012 10.49.357 30.19 1.12 39.596 0 5.394-.641 7.864-1.718 10.044-3.033 1.628-.983 3.11-2.187 5.021-4.104 2.796-2.804 8.021-9.832 8.021-9.832z",
        fill: "#0f0",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("path", {
        d: "M45.93 10.097c2.864-1.316 5.9-2.241 8.927-3.118 2.813-.814 5.688-1.397 8.557-1.984 3.178-.65 6.36-1.328 9.583-1.7 4.324-.5 8.691-.497 13.038-.71 3.26-.159 6.516-.399 9.779-.424a135.38 135.38 0 0110.204.283c4.835.327 9.65.93 14.455 1.559 1.848.242 3.708.445 5.527.85 4.085.911 8.076 2.217 12.046 3.543 3.063 1.023 6.127 2.072 9.07 3.401 2.195.992 4.391 2.038 6.377 3.402 5.18 3.557 10.212 7.525 14.252 12.338 3.042 3.624 5.131 7.969 7.29 12.179 1.737 3.39 3.372 6.86 4.534 10.487 1.505 4.694 2.596 9.554 3.118 14.455.34 3.195.26 6.435 0 9.637-.332 4.103-.529 8.338-1.984 12.188-1.38 3.654-3.763 6.897-6.235 9.92-2.602 3.182-5.535 6.186-8.929 8.503-3.316 2.265-7.144 3.715-10.912 5.102-7.356 2.71-14.962 4.837-22.675 6.236-5.38.976-10.88 1.148-16.34 1.482-6.731.412-13.48.536-20.223.644-8.077.128-16.167.419-24.234 0-7.53-.392-15.025-1.354-22.5-2.345-5.255-.696-10.639-.95-15.699-2.527a49.617 49.617 0 01-12.678-6.04c-5.067-3.376-10.348-7.044-13.605-12.188-2.398-3.79-3.217-8.454-3.826-12.897-.802-5.85-.726-11.896.283-17.715 1.305-7.52 4.026-14.82 7.37-21.683 1.91-3.92 4.463-7.52 7.158-10.948 3.434-4.366 7.056-8.696 11.407-12.152 5.088-4.041 10.96-7.065 16.864-9.778z",
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("path", {
        d: "M181.958 68.864L155.61 58.576H31.897L3.54 66.606M93.377 59.078l.25 58.468M156.112 59.58l-12.547 53.45M31.144 59.329l11.292 55.206",
        fill: "none",
        stroke: "#000",
        strokeWidth: 0.355,
        strokeDasharray: "4.2585744,4.2585744"
      }), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 530.049,
        y: 297.968,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.cz,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 530.049,
        y: 297.968,
        fontSize: 8.872
      }, 'CZ')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 597.241,
        y: 297.118,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.cz,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        x: 597.241,
        y: 297.118,
        fontSize: 8.872
      }, 'CZ')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 531.403,
        y: 244.629,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.tza,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 531.403,
        y: 244.629,
        fontSize: 8.872
      }, 'TZa')), _react.default.createElement("path", {
        d: "M172.423 34.36s-7.143-1.087-9.473.126c-2.722 1.415-3.639 7.277-3.639 7.277l-2.21 11.485c-1.18-12.17-3.611-21.713-8.016-27.294-8.069-10.069-17.473-11.5-26.1-12.459-5.505-.611-9.424.797-14.064 3.823-4.486 2.925-7.314 6.971-9.904 11.66-.985 1.782-2.127 6.01-2.127 6.01.506-6.18-1.344-32.266-3.513-32.372-3.04.944-3.115 30.548-3.868 32.1-2.075-6.457-9.39-18.55-17.244-21.015-11.888-3.731-24.1 3.931-33.593 12.002-5.786 4.918-9.945 20.06-9.945 20.06s-1.24-8.219-5.362-10.525c-2.437-1.363-7.528-.94-7.528-.94s11.57-15.785 21.674-20.882c6.022-3.039 15.454-6.097 25.609-8.395 10.155-2.298 21.033-3.837 29.95-3.837 15.599 0 46.374 3.76 59.528 12.976 13.155 9.215 19.825 20.2 19.825 20.2z",
        fill: "#0092ff",
        fillOpacity: 0.991,
        stroke: "#000",
        strokeWidth: 0.355
      }), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 591.96,
        y: 244.574,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.tza,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        x: 591.96,
        y: 244.574,
        fontSize: 8.872
      }, 'TZa')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 639.159,
        y: 260.721,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pza,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        x: 639.159,
        y: 260.721,
        fontSize: 8.872
      }, 'PZa')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 632.713,
        y: 294.08,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pzpl,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        x: 632.713,
        y: 294.08,
        fontSize: 8.872
      }, 'PZpl')), _react.default.createElement("text", {
        y: 273.035,
        x: 595.849,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.tzp,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        y: 273.035,
        x: 595.849,
        fontSize: 8.872
      }, 'TZp')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 533.093,
        y: 273.035,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.tzp,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 533.093,
        y: 273.035,
        fontSize: 8.872
      }, 'TZp')), _react.default.createElement("text", {
        y: 260.838,
        x: 486.071,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pza,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        y: 260.838,
        x: 486.071,
        fontSize: 8.872
      }, 'PZa')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 490.137,
        y: 294.425,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.pzpl,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 490.137,
        y: 294.425,
        fontSize: 8.872
      }, 'PZpl')), _react.default.createElement("text", {
        y: 336.817,
        x: 557.146,
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
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        style: {
          InkscapeFontSpecification: "'sans-serif Medium'"
        },
        y: 336.817,
        x: 557.146,
        fontSize: 15
      }, 'Base')), _react.default.createElement("text", {
        y: 213.693,
        x: 552.97,
        style: {
          lineHeight: '125%'
        },
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        y: 213.693,
        x: 552.97,
        fontSize: 8.872
      }, 'AS')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 576.658,
        y: 213.693,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.as,
        direction: _Enums.directions.left,
        onClick: this.props.onZoneChange,
        x: 576.658,
        y: 213.693,
        fontSize: 8.872
      }, 'AS')), _react.default.createElement("text", {
        style: {
          lineHeight: '125%'
        },
        x: 552.97,
        y: 213.693,
        fontWeight: 400,
        fontSize: 14.195,
        fontFamily: "Sans",
        letterSpacing: 0,
        wordSpacing: 0,
        transform: "translate(-478.83 -202.253)"
      }, _react.default.createElement("tspan", {
        zone: _Enums.zones.as,
        direction: _Enums.directions.right,
        onClick: this.props.onZoneChange,
        x: 552.97,
        y: 213.693,
        fontSize: 8.872
      }, 'AS')), _react.default.createElement("g", {
        cursor: "pointer",
        fill: "none"
      }, _react.default.createElement("path", {
        d: "M16.92 34.093l9.344-11.49 9.849-7.577 15.657-6.44 19.446-4.798L92.303 1.39l-2.778 19.193.252 11.743-.252.884L82.2 19.193l-9.47-6.566-8.586-1.01-14.395 4.798-12.248 9.723-7.45 13.763-1.263 3.915-3.914-9.092zM170.116 34.093l-9.344-11.49-9.849-7.577-15.568-7.154-19.535-4.084L94.734 1.39l2.777 19.193-.252 11.743.252.884 7.324-14.016 9.47-6.566 8.587-1.01 15.198 4.352 12.159 9.455 6.11 14.656 1.084 6.236 4.718-11.592z"
      }), _react.default.createElement("path", {
        d: "M60.09 14.084c-.804-.09-13.84 6.071-13.84 6.071l-9.196 8.393-4.108 7.5-3.482 9.286.536 7.232 1.16 5h59.733l-.714-3.304-1.965-19.821-6.696-12.054-9.018-8.214zM126.274 14.084c.803-.09 13.839 6.071 13.839 6.071l9.196 8.393 4.107 7.5 3.483 9.286-.536 7.232-1.16 5H95.47l.714-3.304 1.965-19.821 6.696-12.054 9.018-8.214zM92.232 59.084l.268 15.803H51.786l-10-5.267-9.197-10.447zM94.007 59.473v15.594l32.073.38 8.397-.57 10.48-5.302 9.154-10.228zM171.473 35.293l-8.523.252-3.093 7.387-3.094 15.215 25.254 9.912-2.21-14.773zM156.786 60.155l-12.054 52.054 18.125-6.607 12.857-11.34 6.34-17.589.267-7.232zM15.531 35.545l6.44.695s3.22 4.608 3.662 5.43c.442.82 4.293 16.73 4.293 16.73L3.85 65.85l1.831-8.776s5.24-11.743 5.367-12.185c.126-.442 4.482-9.344 4.482-9.344zM30.179 60.245l10.714 53.928L30 111.852l-16.071-9.643-8.661-12.322-2.232-19.285.982-3.125z"
      }), _react.default.createElement("path", {
        d: "M32.199 60.483l6.944 23.991 10.354 17.173 17.93 14.647 25.254 1.01-.757-40.406-41.543.253s-9.849-5.177-10.733-6.44c-.883-1.263-7.828-10.733-7.828-10.733M154.407 60.483l-6.944 23.991-10.354 17.173-17.93 14.647-25.254 1.01.757-40.406 41.543.253s9.849-5.177 10.733-6.44c.883-1.263 7.828-10.733 7.828-10.733"
      })));
    }
  }]);

  return Base;
}(_react.Component);

_defineProperty(Base, "propTypes", {
  onZoneChange: _propTypes.default.func.isRequired
});

var _default = Base;
exports.default = _default;