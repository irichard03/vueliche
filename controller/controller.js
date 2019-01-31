const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require("../models");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/users";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});


router.get("/users", ( request, response) => {
    db.users.find({}).then((data) => {
        response.send(data);
    }).catch((error) => {
        response.json(error);
    });
});

router.post("/checkuser", ( request, response) => {
    db.users.findOne({ email: request.body.email}).then((data) => {
        response.json(data);
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