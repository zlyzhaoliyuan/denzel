'use strict';

const express = require('express');
const server = express();
const PORT = process.env.PORT || 9292;
server.get('/', (req, res) => res.send("hello!!")); 

var fs = require("fs");

server.get('/movies/populate', function (req, res) {
    fs.readFile(__dirname + "/" + "movies.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})


server.listen(PORT, () => console.log(`The denzel server is
running on port ${PORT}`));