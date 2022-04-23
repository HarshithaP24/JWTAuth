"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _strategy = require("passport-jwt/lib/strategy");

var _strategy2 = _interopRequireDefault(_strategy);

var _lib = require("passport-jwt/lib");

var _app = require("../app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.app.use(_passport2.default.initialize);
_app.app.use(_passport2.default.session);
var opts = {};

_passport2.default.serializeUser(function (user, done) {
    done(null, user.username);
});

opts.jwtFromRequest = _lib.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET;

_passport2.default.use(new _strategy2.default(opts, function (jwtPayload, done) {
    var expirationDate = new Date(jwtPayload.exp * 1000);
    if (expirationDate < newDate()) {
        return done(null, false);
    }
    var user = jwtPayload;
    done(null, user);
}));
//# sourceMappingURL=index.js.map