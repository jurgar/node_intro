const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(["Petras", "Jonas", "Antanas"]);
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
