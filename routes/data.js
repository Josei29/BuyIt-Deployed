// This file will have all the routing, we're connecting our app to the DB
const express = require("express");
const router = express.Router();
// Storing the models in a variable to make it easier to access
const db = require("../models");

router.get("/overview/:id", (req, res) => {

    db.User.find({_id: req.params.id}).populate("list").then((data) => {
        //console.log(data[0].list);
        res.json(data[0].list);
    });

});

router.post("/overview", (req, res) => {
    
    let userId = req.body.id;
    let listName = req.body.listName;

    db.List.create({name: listName})
    .then((dbList) => {
      return db.User.findOneAndUpdate({ _id: userId }, { $push:{list: dbList }}, { new: true });
    })
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      // If an error occurred, send it to the client
      res.json(err);
    });

});

router.post("/api/list", (req, res) => {

    db.List.deleteOne(req.body).then((data) => {
      res.json(data);
    });

});

router.post("/api/list/data", (req, res) => {

    db.List.find(req.body).populate("items").then((data) => {
      res.json(data);
    });

});

router.post("/api/newitem", (req, res) => {

    //console.log(req.body);
    let item = {name: req.body.name, price: req.body.price};

    db.Item.create(item)
    .then((dbItem) => {
      return db.List.findOneAndUpdate({ _id: req.body.listId }, { $push:{items: dbItem }}, { new: true });
    })
    .then((dbList) => {
      res.json(dbList);
    })
    .catch((err) => {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

router.post("/api/item/update", (req, res) => {
    // console.log(req.body);
    db.Item.findByIdAndUpdate(req.body, req.body.update).then((data) => {
      res.json(data);
    });
});

module.exports = router;