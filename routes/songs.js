var express = require('express');
const {json} = require("express");
const {stringify} = require("nodemon/lib/utils");
var router = express.Router();

let songs = [
    {
        title: 'A',
        genre: 'Rock'
    },
    {
        title: 'B',
        genre: 'Pop'
    },
    {
        title: 'C',
        genre: 'Classical'
    },
];

router.get('/all',function (req,res,next){
    res.send(
        JSON.stringify(songs)
    );
});
 router.get('/one/:index', function (req,res,next){
     let index = parseInt(req.params.index)
     let song = songs[index];

     if(song === undefined){
         res.send('not found')
     }else{
         res.send(song);
     }
 })


router.put('/update/:index', (req, res, next) => {
    // console.log(req.body, req.params.index)
    let index = parseInt(req.params.index)
    let song = songs[index]
    if (song === undefined) {
        res.send('404 - no song with this index')
    } else {
        song.title = req.body.title;
        song.genre = req.body.genre
        res.send('OK')
    }
    console.log(songs)
})

router.delete('/delete/:index', (req, res, next) => {
    // console.log(req.body, req.params.index)
    let index = parseInt(req.params.index)
    let song = songs[index]
    if (song === undefined) {
        res.send('404 - no song with this index')
    } else {
        songs.splice(index, 1)
    }
    console.log(songs)
})





module.exports = router;