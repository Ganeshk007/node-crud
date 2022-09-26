"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _databaseConfig = _interopRequireDefault(require("./config/database.config.js"));

var _user = _interopRequireDefault(require("./app/routes/user"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _expressEjsLayouts = _interopRequireDefault(require("express-ejs-layouts"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _methodOverride["default"])('_method'));
app.use((0, _cookieParser["default"])());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(_expressEjsLayouts["default"]);
app.set('layout', './layout/layout');
app.use(_express["default"]["static"]('src/public'));

var jsonParser = _bodyParser["default"].json();

var urlencodedParser = _bodyParser["default"].urlencoded({
  extended: false
});

_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect(_databaseConfig["default"].url, {
  useNewUrlParser: true
}).then(function () {
  console.log("Databse Connected Successfully!!");
})["catch"](function (err) {
  console.log('Could not connect to the database', err);
  process.exit();
});

app.use('/user', urlencodedParser, _user["default"]);
app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});