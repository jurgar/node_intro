const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

const names = [{ name: "Jurga", surname: "Ragauske" }];

app.get("/names", (req, res) => {
  res.send(names);
});

app.post("/names", (req, res) => {
  names.push(req.body);
  res, send(req.body);
  //{name: "Belekas"}
});

app.listen(PORT, () =>
  console.log(`Server is running on https://localhost:${PORT}`)
);
