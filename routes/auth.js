// This file will have all the routing, we're connecting our app to the DB
const express = require("express");
const router = express.Router();
// Storing the models in a variable to make it easier to access
const db = require("../models");

// Creating a new User
router.post("/api/user", (req, res) => {
    // console.log("Auth.js", req.body);

    db.User.create(req.body, function(err, data) {
        if(err) return res.json(err);

        res.json(data);
    });

});

router.post("/api/login", (req, res) => {

    db.User.find(req.body, function(err, data) {
        if(err) return res.json(err);

        if (data.length === 0) {
            res.json("Not Found");
        } else res.json(data);
    });

});

module.exports = router;