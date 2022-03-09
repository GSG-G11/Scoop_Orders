const express = require("express");
const router = express.Router();
const path = require("path");
const {addUser,addOrder} = require("../database/queries/postData");
const { getUsers, getMenu } = require("../database/queries/getData");

router.post("/create-order", (req, res) => {
  addUser(req.body.name, req.body.location, req.body.phone).then((data) =>
    res.redirect("/menu.html")
  );
});
router.get("/get-users", (req, res) => {
  getUsers()
    // .then((data) => console.log(data))
    .then((data) => res.json(data));
});
router.get("/get-menu", (req, res) => {
  getMenu()
    // .then((data) => console.log(data.rows))
    .then((data) => res.json(data.rows));
});
router.post("/go-to-order", (req,res) => {
  addOrder(req.body.title,req.body.price)
  // .then((data) =>console.log(data.rows))
  .then((data) =>res.redirect("/all_orders.html"));

})

module.exports = router;
