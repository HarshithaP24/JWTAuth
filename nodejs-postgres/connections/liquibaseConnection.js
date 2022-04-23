var defaultConfig = require('../configs/default.js')

const Liquibase = require('node-liquibase').Liquibase;
const POSTGRESQL_DEFAULT_CONFIG = require('node-liquibase').POSTGRESQL_DEFAULT_CONFIG;

const myConfig = new Liquibase({
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: 'resources/changelog.sql',
  url: `jdbc:postgresql://${defaultConfig.db.host}:${defaultConfig.db.port}/${defaultConfig.db.database}`,
  username: 'egov_demo',
  password: 'bstcBel123',
});

module.exports = myConfig