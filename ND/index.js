const express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

console.log(app.listen);

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`serveris paleistas ant http://localhost:${PORT}`);
});
