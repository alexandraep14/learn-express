var express = require('express');
const {json} = require("express");
var router = express.Router();

let users = [
    {
        name: 'Elena',
        age: 100
    },
    {
        name: 'I\'m just a baby!',
        age: 3
    },
    {
        name: 'Boris',
        age: 2
    },
    {
        name: 'Tim',
        age: 22
    },
]

// CRUD


// CREATE

router.post('/add', function (req, res, next) {
    users.push(
        {
            name: req.body.name,
            age: parseInt(req.body.age)
        }
    )
    res.send({success: true})
})


// READ

/* GET a list of all users. */
router.get('/all', function (req, res, next) {
    res.send(users);
});

/* GET the user with index passes as parameter */
router.get('/one/:index', function (req, res, next) {
    let index = parseInt(req.params.index) // the url parameters are always strings, so we need to convert to int sometimes
    let user = users[index];

    if (user === undefined) {
        res.send({error: "user not found"}, 404); // send http status
    } else {
        res.send(user);
    }
});


// UPDATE

router.put('/update/:index', (req, res, next) => {
    let index = parseInt(req.params.index) // the url parameters are always strings, so we need to convert to int sometimes
    let user = users[index];

    if (user === undefined) {
        res.send({error: "user not found. No user has this index."}, 404); // send http status
    } else {
        user.name = req.body.name;
        user.age = parseInt(req.body.age);
        res.send({success: true});
    }
})


// DELETE

router.delete('/delete/:index', (req, res, next) => {
    let index = parseInt(req.params.index) // the url parameters are always strings, so we need to convert to int sometimes
    let user = users[index];

    if (user === undefined) {
        res.send({error: "user not found. No user has this index."}, 404); // send http status
    } else {
        users.splice(index, 1);
        res.send({success: true});
    }
})


module.exports = router;