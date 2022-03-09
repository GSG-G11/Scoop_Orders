const connection = require("../config/connection");

const getUsers = () => {
  const sql = {
    text: "SELECT * FROM users;",
    values: [],
  };

  return connection.query(sql);
};
const getMenu = () => {
  const sql = {
    text: "SELECT * FROM menu;",
    values: [],
  };

  return connection.query(sql);
};

module.exports = { getUsers, getMenu };
