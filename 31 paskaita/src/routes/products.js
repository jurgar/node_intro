const express = require("express");
const mysql = require("mysql2/promise");
const router = express.Router();

const { dbconfig } = require("../config");

router.get("/products", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const response = await con.execute("SELECT * FROM market");
    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
