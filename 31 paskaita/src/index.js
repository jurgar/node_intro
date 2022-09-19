const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(express.json());
app.use(cors());

const { port } = require("./config");
const { products } = require("./routes");

app.use(express.json());
app.use(cors());
app.use("/products/", products);

app.get("/", async (req, res) => {
  try {
    const con = await mysql.createConnection(mysqlConfig);
    const [response] = await con.execute("SELECT * FROM market;");
    res.send(response);
    await con.end();
  } catch (e) {
    console.log(e);
  }
});

// app.get("/", async (req, res) => {
//   res.send({ msg: "Server is running" });
// });

// app.all("*", (req, res) => {
//   res.status(404).send({ error: "Page not found" });
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
