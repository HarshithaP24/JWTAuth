"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signAccessToken = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _httpErrors = require("http-errors");

var _httpErrors2 = _interopRequireDefault(_httpErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signAccessToken = exports.signAccessToken = function signAccessToken(userId) {
    return new Promise(function (resolve, reject) {
        var payload = {
            name: 'test'
        };
        var secret = 'secretKey';
        var options = {};

        _jsonwebtoken.JWT.sign(payload, secret, options, function (err, token) {
            if (err) reject(err);
            resolve(token);
        });
    });
};
//# sourceMappingURL=1.js.map