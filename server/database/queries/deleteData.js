const connection = require("../config/connection");

const deleteOrders = () => {
  const sql = {
    text: "DELETE FROM orders",
    values: [],
  };

  return connection.query(sql);
};

module.exports = deleteOrders;
