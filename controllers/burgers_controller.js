const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


router.get("/" ,(req, res)=>{
    burger.all((data)=>{
        const burgerData = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index", burgerData);
    })
});


router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name"
    ], [
      req.body.burger_name,
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  

module.exports = router;