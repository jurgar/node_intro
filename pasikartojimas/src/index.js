// 1. susikurti package.json ir uzsipildyti jį("title": "title", "scripts": {"start":"nodemon .src/index.js"})
// 1.2 susikurti atitinkama failu struktura: /src folderis, /src/routes folderis, /src/config.js failas
// 2. susikurti index.js src folderyje
// 3. susiinstaliuoti packagus (node modulius) - npm
// npm install express dotenv mysql2 cors
// 4. instaliuoti nodemon kaip dev moduli. npm install nodemon --save-dev
// 5. importuoti reikiamus modulius require( "module")
// 6. susikonfiguruoti index.js faila ir 7.  pasileisti serveri
// 8. susikonfiguruoti /src/config.js faila ir .env faila
// 9. susitikrinti duomenu bazes pavadinima .env folderyje
// 9. terminale pasirasyti npm start
// 10. susikurti atitinkamus routes, pagal projekto poreikius pvz.: routes/users.js
// 10.2 importuoti express ir susikurti kintamaji const router = express.Router();
// 10.3 pasirasyti routus ir issieksportuoti router.module.exports= router;
//11. pasirasyti route kuris grazins jog serveris veikia app.get("/", ...) index.js faile
//12. pasirasyti route kuris grazins 404 ir Error not found,jeigu path neranda app.all("*", ...) index.js faile

// !!! nepamirsti susikurti duomenu bazes MYSQL arba MongoDB su atitinkamomis strukturomis, lentelemis ir tipais.

const express = require("express");
const cors = require("cors");

const app = express(); //express inicializavimas
app.use(express.json()); // kai daromas POST, pareitu JSON formatu
app.use(cors()); // apsauga

const { port } = require("./config"); //isieksportuojame // config = {port:3000};
// ./ tam paciame folderyje ../

const price = require("./routes/products");
const products = require("./routes/products");

//localhost:3000/products

app.use("/products/", products);
app.use("/price/", price);

app.get("/", (req, res) => {
  res.send({ message: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

// 7. pasileisti serveri
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
