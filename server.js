const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const controller = require("./controller/controller")
const cors = require("cors");   

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname,"./public")));
app.use(controller);
//Controller

app.listen(PORT, () => {
});