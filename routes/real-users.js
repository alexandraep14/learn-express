var express = require('express');
const {json} = require("express");
var router = express.Router();


let users = [
    {
        name: 'Alexandra',
        hobbies: ['music']
    },
    {
        name: 'Boris',
        hobbies: ['dancing', 'singing']
    },
]


router.get('/all', function (req, res, next) {
    res.send(
        JSON.stringify(users)
    );
});
//  * named   real-users/name/:index  returns the name of the user which the
//              given index
//      hint:   user user.name inside   res.send

router.get('/name/:index', function (req, res, next) {
    let index = parseInt(req.params.index)
    let user = users[index];

    if (user === undefined) {
        res.send('user not found')
    } else {
        res.send(user.name);
    }
});


router.post('/add', function(req, res, next) {
    console.log('40', req.body);
    let newUser = {
        name: req.body.userName,
        hobbies: []
    }
    users.push(newUser);
})  // real-users/add

router.get('/:index', function (req, res, next) {
    let index = parseInt(req.params.index)
    let user = users[index];

    if (user === undefined) {
        res.send('user not found')
    } else {
        res.send(user);
    }
});

module.exports = router;