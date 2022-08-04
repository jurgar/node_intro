const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

const names = ["Jurga"];

app.get("/names", (req, res) => {
  const 
  res.send(names);
});

app.post("/names", (req, res) => {
  console.log(req.body);
  names.push(req.body.name);
  res.send(req.body);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
