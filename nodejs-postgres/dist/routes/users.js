"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _userQuery = require("../services/userQuery");

var router = (0, _express.Router)();

router.post('/_get', function (req, res) {
    // console.log("check: ",req.query)
    (0, _userQuery.getQuery)(req, res);
});

router.post('/_insert', function (req, res) {
    // console.log("check: ",req.body)
    (0, _userQuery.insertQuery)(req, res);
});

exports.default = router;
//# sourceMappingURL=users.js.map