"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.strategy = undefined;

var _strategy = require("passport-jwt/lib/strategy");

var _strategy2 = _interopRequireDefault(_strategy);

var _lib = require("passport-jwt/lib");

var _userQuery = require("../services/userQuery");

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathToKey = _path2.default.join(__dirname.replace("dist", "src"), '..', 'id_rsa_pub.pem');
var PUB_KEY = _fs2.default.readFileSync(pathToKey, 'utf8');

var options = {
    jwtFromRequest: _lib.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: 'RS256',
    passReqToCallback: true
    //console.log("check options: ",options.jwtFromRequest," : ",options.secretOrKey);

};var strategy = exports.strategy = new _strategy2.default(options, function (req, jwtPayload, done) {
    console.log("------- Using Custom Strategy --------");
    console.log("check req url: ", req.route.path);
    console.log("check jwtPayload: ", jwtPayload);

    var user = {
        username: jwtPayload.subName
    };
    try {
        (0, _userQuery.getUser)(user, function (result) {
            if (result.length > 0) {
                //console.log("err");
                return done(null, result);
            } else {
                //console.log("fail");
                return done(null, false);
            }
        });
    } catch (err) {
        return done(err, false);
    }
});
//# sourceMappingURL=passport.js.map