const express = require("express");
const router = express.Router();
const addUser = require("../database/queries/postData");
const getUsers = require("../database/queries/getData");

router.post("/create-order", (req, res) => {
  addUser(req.body.name, req.body.location, req.body.phone).then((data) =>
    console.log(data.rows)
  );
  res.redirect("/");
});
router.get("/get-order", (req, res) => {
  getUsers()
    .then((data) => console.log(data))
    .then((data) => res.json(data));
});

module.exports = router;
