const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const controller = require("./controller/controller");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  //app.use(express.static("client/build"));
  app.use(cors());
  app.use(express.static(path.join(__dirname, "/dist")));
}

app.use(controller);

app.listen(PORT, () => {
});