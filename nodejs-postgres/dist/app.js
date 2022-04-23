"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.client = exports.app = undefined;

var _dbConnection = require("./connections/dbConnection");

var _dbConnection2 = _interopRequireDefault(_dbConnection);

var _liquibaseConnection = require("./connections/liquibaseConnection.js");

var _liquibaseConnection2 = _interopRequireDefault(_liquibaseConnection);

var _default = require("./configs/default");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require("./routes/users");

var _users2 = _interopRequireDefault(_users);

var _auth = require("./routes/auth");

var _auth2 = _interopRequireDefault(_auth);

var _passport = require("./middleware/passport");

var _genKeyPair = require("./genKeyPair");

var _passport2 = require("passport");

var _passport3 = _interopRequireDefault(_passport2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json({ type: 'application/json' }));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.listen(_default.defaultConfig.appPort, function () {
    console.log("Server is listening to http://localhost:" + _default.defaultConfig.appPort);
});

_liquibaseConnection2.default.status();
_liquibaseConnection2.default.update();
_dbConnection2.default.connect();

app.use(_passport3.default.initialize());
_passport3.default.use(_passport.strategy);

app.use('/users', _users2.default);
app.use('/auth', _auth2.default);

exports.app = app;
exports.client = _dbConnection2.default;
//# sourceMappingURL=app.js.map