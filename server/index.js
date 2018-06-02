const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();
const controller = require("./controller.js");

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);

  console.log("Server is runnin boi!");
});

app.use(bodyParser.json());
app.use(cors());

app.get("/api/houses", controller.getHouses);

app.listen(3001, () => {
  console.log("listenin' on 3001");
});
