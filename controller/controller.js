const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
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
    let token = jwt.sign({id: request.body.email}, config.secret, {expiresIn: 259200});
    let user = request.body.email;
    db.users.create({
        email: request.body.email,
        password: bcrypt.hashSync(request.body.password, salt),
        authorization: request.body.authorization
    }).then(function() {
        response.send({ auth: true, token: token, user: user});
    }).catch(function(error){
        response.json(error);
    });
});

router.post("/login", ( request, response) => {
    let user = request.body.email;
    db.users.findOne({ email: request.body.email}).then((data) => {
        if(!data) {
            response.send("Email address not found, please try again or register.");
            let verifiedPassword = bcrypt.compareSync(request.body.password, data.password);
            if(!verifiedPassword) {
                response.send("Email address not found, please try again or register.");
                let token = jwt.sign({id: request.body.email}, config.secret, {expiresIn: 259200});
                response.send(({ auth: true, token: token, user: user}));
            }   
        }
    }).catch((error) => {
        response.json(error);
    });
});
    
module.exports = router;