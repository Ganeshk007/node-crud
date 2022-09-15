"use strict";

var express = require('express');

var AdminLoginController = require("../controllers/admin/login");

var router = express.Router();
router.get('/login', AdminLoginController.findAll);
router.post('/login', AdminLoginController.create);
module.exports = router;