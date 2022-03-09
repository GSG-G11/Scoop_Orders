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
const getorders = () =>{
  const sql = {
    text: "",
    values: [],
  }
}
module.exports = { getUsers, getMenu };
