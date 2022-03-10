const express = require("express");
const router = express.Router();
const path = require("path");
const { addUser, addOrder } = require("../database/queries/postData");
const { getUsers, getMenu, getOrders } = require("../database/queries/getData");
const deleteOrders = require("../database/queries/deleteData");

router.post("/create-order", (req, res) => {
  addUser(req.body.name, req.body.location, req.body.phone).then((data) =>
    res.redirect("/menu.html")
  );
});
router.get("/get-users", (req, res) => {
  getUsers().then((data) => res.json(data.rows));
});
router.get("/get-menu", (req, res) => {
  getMenu().then((data) => res.json(data.rows));
});
router.post("/addOrder", (req, res) => {
  addOrder(req.body.id).then((data) => res.json({ msg: "done" }));
});

router.get("/orders", (req, res) => {
  getOrders().then((data) => res.json(data.rows));
});

router.delete("/delete", (req, res) => {
  deleteOrders().then((data) => res.redirect("/menu.html"));
});

module.exports = router;
