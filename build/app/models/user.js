"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    "default": ''
  },
  lastName: {
    type: String,
    "default": ''
  },
  phone: String
});
var user = new _mongoose["default"].model('user', schema);
module.exports = user;