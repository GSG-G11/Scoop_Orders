const { Pool } = require('pg');
require("env2")(".env")

const {
  env: {
    NODE_ENV, TEST_DB_URL, DB_URL,DEV_URL
  },
} = process;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DB_URL;
    break;
  case 'development':
    dbUrl = DEV_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('NO DATABASE URL Founded !');
}
console.log(dbUrl,NODE_ENV);
const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);