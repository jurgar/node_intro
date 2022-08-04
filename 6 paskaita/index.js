const { application } = require('express');
const express = require('express');
require('dotenv').config();

const port = proses.env.PORT || 8080;
//const name = user.name || "user";

const app = express();

//const greetings = `Hello ${name}`; // Hello Rokas
// Hello users

app.listen(port, () => console.log(`Server is running on port ${port}`));
