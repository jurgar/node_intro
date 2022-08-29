const express = require("express"); // importas
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express(); // sukuriama aplikacija
app.use(express.json());
app.use(cors()); // musu informacija gristu json formatu

const port = process.env.PORT || 8080;
const uri = process.env.CONNECTION;

const client = new MongoClient(uri);

//62fbc5324ea37d784c6f6159
//62fbc5714ea37d784c6f615a

//localhost:3000/users/matas@gmail.com

// app.delete("/users/:id", async (req, res) => {
//   try {
//     const con = await client.connect();
//     const data = await con
//       .db("10paskaita")
//       .collection("users")
//       .deleteOne({ _id: ObjectId(req.params.id) });
//     await con.close();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// });

// app.delete("/users/:email", async (req, res) => {
//   try {
//     const con = await client.connect();
//     const data = await con
//       .db("10paskaita")
//       .collection("users")
//       .deleteOne({ email: req.params.email });
//     await con.close();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// });

app.get("/users/:name", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("10paskaita")
      .collection("users")
      .find({ name: req.params.name })
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
