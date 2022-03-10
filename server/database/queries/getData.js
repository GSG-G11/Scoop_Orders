const connection = require("../config/connection");

const getUsers = () => {
  const sql = {
    text: "SELECT (name,location,number) FROM users ORDER BY id DESC LIMIT 1;",
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
const getOrders = () => {
  const sql = {
    text: "SELECT * FROM orders INNER JOIN menu ON menu_id = menu.id",
  };
  return connection.query(sql);
};
module.exports = { getUsers, getMenu, getOrders };
