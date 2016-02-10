//  https://project-nodejs-sosana.c9.io

var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './index.html'));
});


app.set('port', process.env.PORT || 3000);
app.listen(3000, process.env.IP);