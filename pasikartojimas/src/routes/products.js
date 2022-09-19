const express = require("express");
const mysql = require("mysql2/promise");

const router = express.Router();
// products/
//lokalhost:3000/
//localhost:3000/products
//localhost:3000/users

const { dbconfig } = require("../config");

router.get("/", async (req, res) => {
  try {
    //blokas kuriame bandomas vykdyti kodas
    const con = await mysql.createConnection(dbconfig);
    //[ [data], {parameters}, [extra] ]
    const [response] = await con.execute("SELECT * FROM products;");
    await con.end();
    res.send(response);
  } catch (error) {
    //blokas kuris ivuksta, kai try sufeilina
    console.error(error);
  }
});

// pagal id
router.get("/:id", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    console.log(req.params.id);
    const [response] = await con.execute(
      `SELECT * FROM products WHERE id=${req.params.id}`
    );
    await con.end();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
});

// bendra suma
router.get("/price", async (req, res) => {
  try {
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      "SELECT SUM(price) AS Total_price FROM products"
    );
    res.send(response);
    await con.end();
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
