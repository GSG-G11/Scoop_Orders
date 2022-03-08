require("env2")(".env");
const { Pool } = require("pg");

if (!process.env.DB_URL_DEV) {
  throw new Error("NO DATA");
}
const connection = new Pool({
  connectionString: process.env.DB_URL_DEV,
  ssl: false,
});

module.exports = connection;
