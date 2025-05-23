const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const book = require("./book.json");

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ result: book });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
