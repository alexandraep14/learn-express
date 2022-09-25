var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); // from math import sqrt    in Python     from ./routes/users import userRouter
var realUsersRouter = require('./routes/real-users'); // from math import sqrt    in Python     from ./routes/users import userRouter
var booksRouter = require('./routes/books');
var hobbiesRouter = require('./routes/hobbies');
// from math import sqrt    in Python     from ./routes/users import userRouter
// we can import other routers we created inside /routes/


// enable CORS
var cors = require('cors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users',usersRouter);
app.use('/real-users', realUsersRouter);
app.use('/books', booksRouter);
app.use('/hobbies', hobbiesRouter);
// we can bind new routes in here

module.exports = app;
