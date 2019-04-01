// This file will have all the routing, we're connecting our app to the DB
const express = require("express");
const router = express.Router();
// Storing the models in a variable to make it easier to access
const db = require("../models");
// Bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Creating a new User
router.post("/api/user", (req, res) => {
    // console.log("Auth.js", req.body);
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        //console.log(hash);
        req.body.password = hash;
        //console.log(req.body);
        db.User.create(req.body, function(err, data) {
            if(err) return res.json(err);
    
            res.json(data);
        });
    });
});

// Login
router.post("/api/login", (req, res) => {

    db.User.find({email: req.body.email}, function(err, data) {
        if(err) return res.json(err);

        if (data.length === 0) {
            res.json("Not Found");
        } else {
            bcrypt.compare(req.body.password, data[0].password, function(err, dbpassword) {
                // console.log(dbpassword);
                if (dbpassword === false) res.json("Not Found");
                else {
                    res.json(data);
                };
            });
        };
        
    });

});

module.exports = router;