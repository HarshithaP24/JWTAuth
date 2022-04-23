"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = undefined;

var _genKeyPair = require("../genKeyPair");

var defaultConfig = exports.defaultConfig = {
  db: {
    provider: "pg",
    host: "localhost",
    user: "egov_demo",
    port: 5435,
    password: "bstcBel123",
    database: "bel_cb_dev"
  },
  appPort: 3300
  // PUB_KEY: genKeyPair.PUB_KEY,
  // PRIV_KEY: genKeyPair.PRIV_KEY 
};
//# sourceMappingURL=default.js.map