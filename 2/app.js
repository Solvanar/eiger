const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectionManager = require('./connection');
const indexRouter = require('./routes/index');
const tradesRouter = require('./routes/trades');
const Trades = require('./models/trades');

const app = express();
const db = connectionManager.getConnection();

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trades', tradesRouter);

app.listen(3000, () => {
  console.log(`Server listening at http://localhost:${3000}`);
});

module.exports = app;
