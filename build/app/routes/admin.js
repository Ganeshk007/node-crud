"use strict";

var _express = _interopRequireDefault(require("express"));

var _login = _interopRequireDefault(require("app/controllers/admin/login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/login', _login["default"].findAll);
router.post('/login', _login["default"].create);
module.exports = router;