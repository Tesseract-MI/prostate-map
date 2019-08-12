"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationSelector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Apex = _interopRequireDefault(require("./Apex.js"));

var _Base = _interopRequireDefault(require("./Base.js"));

var _Mid = _interopRequireDefault(require("./Mid.js"));

var _Enums = require("./Enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LocationSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(LocationSelector, _Component);

  function LocationSelector(props) {
    var _this;

    _classCallCheck(this, LocationSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationSelector).call(this, props));
    _this.state = {
      location: _Enums.locations.base,
      zone: '',
      direction: ''
    };
    _this.handleLocationChange = _this.handleLocationChange.bind(_assertThisInitialized(_this));
    _this.handleZoneChange = _this.handleZoneChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LocationSelector, [{
    key: "handleLocationChange",
    value: function handleLocationChange(event) {
      this.setState({
        zone: '',
        direction: '',
        location: event.target.value
      });
    }
  }, {
    key: "handleZoneChange",
    value: function handleZoneChange(event) {
      this.setState({
        zone: event.target.getAttribute('zone'),
        direction: event.target.getAttribute('direction')
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG() {
      if (this.state.location === _Enums.locations.apex) {
        return _react.default.createElement(_Apex.default, {
          onZoneChange: this.handleZoneChange
        });
      } else if (this.state.location === _Enums.locations.base) {
        return _react.default.createElement(_Base.default, {
          onZoneChange: this.handleZoneChange
        });
      } else if (this.state.location === _Enums.locations.mid) {
        return _react.default.createElement(_Mid.default, {
          onZoneChange: this.handleZoneChange
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "prostate-zone-selector-location-selector"
      }, _react.default.createElement("select", {
        className: "prostate-zone-selector-location-selector-select",
        value: this.state.location,
        onChange: this.handleLocationChange
      }, _react.default.createElement("option", {
        value: _Enums.locations.apex
      }, "Apex"), _react.default.createElement("option", {
        value: _Enums.locations.mid
      }, "Mid"), _react.default.createElement("option", {
        value: _Enums.locations.base
      }, "Base")), _react.default.createElement("div", {
        className: "prostate-zone-selector-location-selector-label"
      }, _react.default.createElement("h3", null, this.state.zone, " ", this.state.direction)), _react.default.createElement("div", {
        className: "prostate-zone-selector-location-selector-svg"
      }, this.renderSVG()));
    }
  }]);

  return LocationSelector;
}(_react.Component);

exports.LocationSelector = LocationSelector;