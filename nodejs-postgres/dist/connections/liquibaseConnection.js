'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _default = require('../configs/default');

var _nodeLiquibase = require('node-liquibase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myConfig = new _nodeLiquibase.Liquibase((0, _extends3.default)({}, _nodeLiquibase.POSTGRESQL_DEFAULT_CONFIG, {
  changeLogFile: 'src/resources/liquibase/changelog1.sql',
  url: 'jdbc:postgresql://' + _default.defaultConfig.db.host + ':' + _default.defaultConfig.db.port + '/' + _default.defaultConfig.db.database,
  username: _default.defaultConfig.db.user,
  password: _default.defaultConfig.db.password
}));
// const Liquibase = require('node-liquibase').Liquibase;
//Liquibase Setup
exports.default = myConfig;
//# sourceMappingURL=liquibaseConnection.js.map