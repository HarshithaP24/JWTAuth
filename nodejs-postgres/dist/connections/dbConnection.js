"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _client = require("pg/lib/client");

var _client2 = _interopRequireDefault(_client);

var _default = require("../configs/default.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//connection to PGAdmin database
var client = new _client2.default({
    host: _default.defaultConfig.db.host,
    user: _default.defaultConfig.db.user,
    port: _default.defaultConfig.db.port,
    password: _default.defaultConfig.db.password,
    database: _default.defaultConfig.db.database
});

exports.default = client;
//# sourceMappingURL=dbConnection.js.map