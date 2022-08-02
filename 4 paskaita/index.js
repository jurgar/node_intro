// prisideti importus reikalingus express serveriui | npm install express
// susikurti express serveri
// susikurti API su /users path kuris grazins users masyva
// susikurti API su /links path kuris grazins links masyva
// paleisti serveri

// ND.
// susikurti POST API vartotojams, kuris prides nauja vartotoja i masyva
//sukurti POST API vartotojams, kuris prides nauja linka i masyva.

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const users = ["admin"];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  users.push(req.body.users);
  res.send(req.body);
});

const links = ["https://www.google.lt"];

app.get("/links", (req, res) => {
  res.send(links);
});

app.post("/links", (req, res) => {
  console.log(req.body);
  links.push(req.body.links);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
