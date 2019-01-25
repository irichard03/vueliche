const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require("../models");
mongoose.connect('mongodb://localhost:27017/vueliche');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/users";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

router.get("/users", ( request, response) => {
    db.users.find({}).then((data) => {
        response.send(data);
    }).catch((error) => {
        response.json(error);
    });
});

router.get("/authenticate", ( request, response) => {
    db.users.find({}).then(() => {
        response.send("Auth route hit");
    }).catch((error) => {
        response.json(error);
    });
});

router.post("/register", ( request, response) => {
    db.users.create({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        authorization: request.body.authorization
    }).then(function() {
        response.send("User Added.");
    }).catch(function(error){
        response.json(error);
    });
});



module.exports = router;