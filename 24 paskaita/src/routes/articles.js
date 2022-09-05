const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

const { dbconfig } = require("../config");
const { isLoggedIn } = require("../middleware");

router.get("/", isLoggedIn, async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute("SELECT * FROM articles");
    await con.end();
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
  res.send({ data: "Im logged in" });
});

module.exports = router;
