/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-destructuring */
const express = require("express");
const mysql = require("mysql2/promise");

const { dbconfig } = require("../config");
const { isLoggedIn, isAuth } = require("../middleware");

const router = express.Router();

router.get("/user-tutorials/:id", isLoggedIn, async (req, res) => {
  try {
    const id = req.params.id;
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      `SELECT * FROM tutorials WHERE user_id=${id};`
    );
    await con.end();
    res.send(response);
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});
/*veikia rasant pvz localhost:3000/tutorials/user-tutorials/1 */

router.get("/", async (req, res) => {
  try {
    const isAuthenticated = await isAuth(req);
    const con = await mysql.createConnection(dbconfig);
    const [response] = await con.execute(
      `SELECT * FROM tutorials ${isAuthenticated} ? '' : WHERE private = 0;`
    );
    res.send(response);
    await con.end();
  } catch (e) {
    res.status(400).send({ error: "Error" });
  }
});
// cia paziuri ar prisijunges ir paduoda atitnkama info, jei prisijunges rodo viska,
//jei ne tada todo tik tuos, kurie private = 0

router.post("/", isLoggedIn, async (req, res) => {
  try {
    const userId = req.user.id;
    const con = await mysql.createConnection(dbConfig);
    const [data] = await con.execute(
      `INSERT INTO tutorials (user_id, title, content) VALUES (${mysql.escape(
        userId
      )}, ${mysql.escape(req.body.title)}, ${mysql.escape(req.body.content)})`
    );
    res.send(data);
    await con.end();
  } catch (err) {
    res.status(400).send({ err: "Error" });
  }
});
//issiusti duomenis jie esi prisijunges

module.exports = router;
