//Liquibase Setup
import { defaultConfig } from '../configs/default';
import { Liquibase } from 'node-liquibase';
// const Liquibase = require('node-liquibase').Liquibase;
import { POSTGRESQL_DEFAULT_CONFIG } from 'node-liquibase';

const myConfig = new Liquibase({
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: 'src/resources/liquibase/changelog1.sql',
  url: `jdbc:postgresql://${defaultConfig.db.host}:${defaultConfig.db.port}/${defaultConfig.db.database}`,
  username: defaultConfig.db.user,
  password: defaultConfig.db.password,
});

export default myConfig;