const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();
const controller = require("./controller.js");
const authController = require("./authController.js");
const session = require("express-session");
const checkForSession = require("./checkForSession.js");

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);

  console.log("Server: 10-4");
});

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    name: "houser_demo",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(checkForSession);

// auth endpoints
app.post("/api/login", authController.login);
app.post("/api/register", authController.register);
app.post("/api/signout", authController.signOut);
app.get("/api/user", authController.getUser);

// house endpoints
app.get("/api/inventory", controller.getHouses);
app.get("/api/getHousesById", controller.getHomesByUserId);
app.post("/api/house", controller.createHouse);
app.delete("/api/houses", controller.deleteHouseById);
app.get("/api/house/rent", controller.getByRent);

app.listen(3001, () => {
  console.log("listenin' on 3001");
});
