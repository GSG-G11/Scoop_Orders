const connection = require("../config/connection");

const addUser = (name, location, number) => {
  const sql = {
    text: "INSERT INTO users (name, location,number) VALUES ($1, $2,$3) RETURNING *;",
    values: [name, location, number],
  };
  return connection.query(sql);
};

const addOrder = (id) => {
  const sql = {
    text: "INSERT INTO orders (menu_id) VALUES ($1) RETURNING *;",
    values: [id],
  };
  return connection.query(sql);
};

module.exports = { addUser, addOrder };
