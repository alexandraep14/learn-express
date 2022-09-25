var express = require('express');
const {json} = require("express");
var router = express.Router();

let users = [
    'Elena',
    'Adrien',
    'Boris',
    'Alexandra',
    'Tim',
]



/* GET a list of all users. */
router.get('/all', function (req, res, next) {
    res.send(
        JSON.stringify(users)
    );
});
/* GET the user with index=0 */
router.get('/one/:index', function (req, res, next) {
    let index = parseInt(req.params.index) // the url parameters are always strings, so we need to convert to int sometimes
    let user = users[index];

    if (user === undefined) {
        res.send('user not found')
    } else {
        res.send(user);
    }
});





module.exports = router;