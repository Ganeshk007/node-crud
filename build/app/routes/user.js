"use strict";

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user"));

var _userValidation = _interopRequireDefault(require("../requests/userValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _user["default"].findAll);
router.get('/create', function (req, res) {
  res.render('user/add');
});
router.get('/:id', _user["default"].findOne);
router.post('/', _userValidation["default"], _user["default"].create);
router.post('/:id/update', _user["default"].update);
router.get('/:id/delete', _user["default"].destroy);
module.exports = router;