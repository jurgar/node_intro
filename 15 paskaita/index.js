const express = require("express");
const mysql = require("mysql2/promise");
const PORT = 3000;

const app = express();
app.use(express.json());

const mysqlConfig = {
  host: "mysql-vigi26-do-user-12300242-0.b.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_R7zY45rm2EDdhNVYzYW",
  database: "products",
  port: "25060",
};

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    res.send("success");
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.get("/items", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);

    const limit = req.query.limit;
    console.log(mysql.escape("Julija"));
    console.log("Julija");

    const response = await con.execute(`SELECT * FROM items LIMIT ${limit};`);

    res.send(response[0]);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

app.get("*", async (req, res) => {
  res.status(404).send("Page not found:(");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
