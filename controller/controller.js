const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const config = require("./config");
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
    let user = request.body.email;
    let password = request.body.password;
    db.users.create({
        email: user,
        password: bcrypt.hashSync(password, salt)
    }).then(function() {
        response.send("200 OK");
    }).catch(function(error){
        response.json(error);
    });
});

router.post("/login", ( request, response) => {
    db.users.findOne({ email: request.body.email}).then((data) => {
        if(!data) {
            response.send("Email address not found, please try again or register.");
        }    
            
        let verifiedPassword = bcrypt.compareSync(request.body.password, data.password);
        if(!verifiedPassword) {
            response.sendStatus(401);
        }
        else {
            response.json(data);
        }
        
    }).catch((error) => {
        throw (error);
    });
});
    
module.exports = router;