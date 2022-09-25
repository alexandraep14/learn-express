var express = require('express');
const {json} = require("express");
var router = express.Router();

let hobbies = ['music','reading','dancing', 'singing']

router.get('/all', function(req,res,next){
    res.send(
        JSON.stringify(hobbies)
    );
});

router.post('/add', function (req,res,next){
    hobbies.push(req.body.hobby);
    console.log(req.body.hobby);

})

module.exports = router;
