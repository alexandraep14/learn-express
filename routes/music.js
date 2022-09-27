var express = require('express');
const {json} = require("express");
var router = express.Router();

let musicLi = ['dance', 'house', 'rock', 'populara'];

router.get('/all', function(req,res,next){
    res.send(
        JSON.stringify(musicLi)
    );
});

router.get('/one/:index', function (req,res,next){
    let index = parseInt(req.params.index)
    let music = musicLi[index];

    if(music === undefined) {
        res.send('music not found')
    }else{
        res.send(music);
    }
})
router.post('/add', function (req,res,next){
    musicLi.push(req.body.music);
    console.log(req.body.music);

})

module.exports = router;