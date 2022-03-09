const express = require("express");
const router = express.Router();
const addUser = require("../database/queries/postData");
const {getUsers,getMenu} = require("../database/queries/getData");


router.post("/create-order", (req, res) => {
  addUser(req.body.name, req.body.location, req.body.phone).then((data) =>
    console.log(data.rows)
  );
  res.redirect("/menu.html");
});
router.get("/get-order", (req, res) => {
  getUsers()
    // .then((data) => console.log(data))
    .then((data) => res.json(data));
});
router.get("/get-menu", (req, res) => {
  getMenu()
    // .then((data) => console.log(data.rows))
    .then((data) => res.json(data.rows));
});

module.exports = router;
