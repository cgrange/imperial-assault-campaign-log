var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { MongoClient } = require('mongodb');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const testApiRouter = require('./routes/testApi');
const testDBRouter = require('./routes/testDB');
require('dotenv/config');

const app = express();

const client = new MongoClient(process.env.MONGODB_CONNECTION, {useUnifiedTopology: true});

async function run() {
  try {
    await client.connect();
    console.log("DB connected!");
    const db = client.db("testdb");
    const collection = db.collection("people");
    let document = {
      name: "colton",
      title: "bmf",
      role: "software engineer",
      weaknesses: "switchblade"
    };
    await collection.insertOne(document);
    const person = await collection.findOne();
    console.log(person);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testApi', testApiRouter);
app.use('/testDB', testDBRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
