"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.issueJWT = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const pathToKey = path.join(__dirname.replace("dist","src"), '..', 'id_rsa_pub.pem');
// const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
var pathToKey = _path2.default.join(__dirname.replace("dist", "src"), '..', 'id_rsa_priv.pem');
var PRIV_KEY = _fs2.default.readFileSync(pathToKey, 'utf8');

var issueJWT = exports.issueJWT = function issueJWT(user) {
    var id = user.username;
    var expiresIn = '1d';

    var payload = {
        sub: id,
        issuedDate: Date.now()
    };
    //console.log("check all",pathToKey," : ",payload.sub," : ",payload.issuedDate," : ",PUB_KEY);
    var signedToken = _jsonwebtoken2.default.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' }); // { expiresIn: expiresIn, algorithm: 'RS256' } mentioning to sign using algrthm RS256
    return {
        token: 'bearer ' + signedToken,
        expiresIn: expiresIn
    };
};
//# sourceMappingURL=utils.js.map