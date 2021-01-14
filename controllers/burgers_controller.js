var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    router.post("/api/burgers", function (req, res) {
        burger.insertOne(req.body.burger_name, function(result) {
                res.redirect("/");
            }
        );
    });

    router.put("/api/burgers/:id", function (req, res) {
        burger.updateOne(req.params.id, function(result) {
            res.sendStatus(200);
        });
    });

    router.delete("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
module.exports = router;