"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _randToken = require("rand-token");

var _randToken2 = _interopRequireDefault(_randToken);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _userQuery = require("../services/userQuery");

var _utils = require("../lib/utils");

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathToKey = _path2.default.join(__dirname.replace("dist", "src"), '..', 'id_rsa_pub.pem');
// import { passport } from "../app";

var PUB_KEY = _fs2.default.readFileSync(pathToKey, 'utf8');

var router = (0, _express.Router)();

router.get('/protectedResource', _passport2.default.authenticate('jwt', { session: false }), function (req, res, next) {
    res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!" });
});

router.post('/register', function (req, res, next) {
    try {
        (0, _userQuery.insert)(req, res).then(function () {});
        var result = (0, _userQuery.insertInto)(req, res);
        console.log("success", result);
        res.json({ success: true, msg: "User Registered Successfully", userId: req.body.id });
    } catch (err) {
        res.json({ sucess: false, msg: err });
    }
});

router.post('/login', function (req, res, next) {
    var uname = req.body.username;
    var pswd = req.body.password;
    try {
        (0, _userQuery.getUser)(req, function (result) {
            //console.log("check result: ",result);
            console.log("result: ", result[0].username, result[0].password, result.length);
            if (result && uname === result[0].username && pswd === result[0].password) {
                var user = {
                    "username": result[0].username,
                    "id": result[0].id
                };
                var jwt = (0, _utils.issueJWT)(user);
                res.json({ sucess: true, msg: "User is Validated", token: jwt.token, expiresIn: jwt.expiresIn });
            } else {
                res.json({ sucess: false, msg: "Authentication Failed" });
            }
        });
    } catch (err) {
        res.json({ sucess: false, msg: err });
    }
});

router.post('/verify', function (req, res, next) {
    var token = req.body.token;
    var secret = PUB_KEY;
    try {
        _jsonwebtoken2.default.verify(token, secret, { algorithms: 'RS256' });
        res.json({ success: true, msg: token + " is valid" });
    } catch (err) {
        res.json({ success: false, msg: err });
    }
});

router.post('/token', function (req, res, next) {
    var username = req.body.username;
    var refreshToken = req.body.refreshToken;
    if (refreshToken in refreshTokens && refreshTokens[refreshToken] === username) {
        var user = {
            'username': username,
            'role': 'Admin'
        };
        var token = _jsonwebtoken2.default.sign(user, secret, { expiresIn: 300 });
        res.json({ token: 'JWT ' + token });
    } else {
        res.send(401);
    }
});

router.post('/token/reject', function (req, res, next) {
    var refreshToken = req.body.refreshToken;
    if (refreshToken in refreshTokens) {
        delete refreshTokens[refreshToken];
    }
    res.send(204);
});

exports.default = router;
//# sourceMappingURL=auth.js.map