const express = require('express');

const dbgr = require('debug')('development:app');
const db = require('./config/mongoose-connection');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    dbgr('Server started at http://localhost:3000');
});
