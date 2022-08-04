const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

app.get("/cars/:model", (req, res) => {
  const selectedModel = req.params.model;

  res.send(cars[selectedModel]);
});

app.listen(PORT, () =>
  console.log(`Server is running on https://localhost:${PORT}`)
);
