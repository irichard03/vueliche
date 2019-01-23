const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vueliche');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/users";
mongoose.connect(MONGODB_URI);

router.get("/", ( request, response) => {
  response.send("200 OK");
});

module.exports = router;