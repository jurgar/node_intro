const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
const uri = `mongodb+srv://jurgar:${process.env.PASSWORD}@cluster0.31zkme4.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

app.get("/", async (req, res) => {
  try {
    const con = await client.connect(); // atidarom prisijungimas
    const data = await con.db("demo1").collection("movies").find().toArray(); // pasiimam duomenis
    await con.close(); //uzdarom prisijungima
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("demo1")
      .collection("movies")
      .insertOne({ title: "King Kong", budget: 207000000, year: 2005 });
    await con.close();
    return res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
