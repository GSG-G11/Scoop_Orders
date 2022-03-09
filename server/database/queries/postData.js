const connection = require("../config/connection");

const addUser = (name, location, number) => {
  const sql = {
    text: "INSERT INTO users (name, location,number) VALUES ($1, $2,$3) RETURNING *;",
    values: [name, location, number],
  };
  return connection.query(sql);
};

const addOrder = (name, price) => {
  const sql = {
    text: "INSERT INTO orders (name, price) VALUES ($1, $2) RETURNING *;",
    values: [name, price],
  };
  return connection.query(sql);
};


module.exports = {addUser,addOrder};
