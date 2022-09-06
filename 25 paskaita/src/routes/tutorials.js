const express = require("express");
const mysql = require("mysql2/promise");

const jwt = require("jsonwebtoken");

const { dbconfig, jwtSecret } = require("../config");
const { isLoggedIn } = require("../middleware");

const router = express.Router();

router.get("/user-tutorials/:id", isLoggedIn, async (req, res) => {
  try {
    const id = req.params.id;
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      `SELECT * FROM tutorials WHERE user_id-${id}`
    );
    await con.end();
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";
    console.log(token);
    const user = jwt.verify(token, jwtSecret);
    console.log(user);
    if (user) {
      const con = await mysql.createConnection(dbconfig);
      const [response] = await con.execute(`SELECT * FROM tutorials`);
      await con.end();
      res.send(response);
    } else {
      console.log("Not connected");
    }
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});

router.post("/tutorials", async (req, res) => {
  let userData = req.body;

  try {
    userData = await userSchema.validateAsync(userData);
  } catch (e) {
    res.status(400).send({ error: "Incorect data " });
  }

  try {
    const con = await mysql.createConnection(dbconfig);

    const [response] = await con.execute(
      `SELECT * FROM users WHERE email = ${mysql.escape(userData.email)}`
    );

    await con.end();

    if (response.length === 0) {
      return res.status(400).send({ error: "Incorrect email" });
    }

    const isAuthed = bcrypt.compareSync(
      userData.password,
      response[0].password
    );

    if (isAuthed) {
      const token = jwt.sign(
        { id: response[0].id, email: response[0].email },
        jwtSecret
      );

      res.send({ token });
    } else {
      res.status(400).send({ error: "Incorrect password" });
    }
  } catch (e) {
    res.status(500).send({ error: "Server error" });
  }
});

module.exports = router;
