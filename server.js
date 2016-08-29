'use strict';

const express = require('express');

const fs = require('fs');
const serveStatic = require('serve-static');
const app = express();



const path = require('path');
app.use('/dist', serveStatic(path.join(__dirname, './dist')));
app.use('/components/cssOutput', serveStatic(path.join(__dirname, './components/cssOutput')));
app.use('/components/images', serveStatic(path.join(__dirname, './components/images')));
app.use('/node_modules', serveStatic(path.join(__dirname, './node_modules')));


app.get('*', (req,res) => {
    let options = { root: __dirname};
    res.sendFile('./index.html',options);
})

let port = 82;
app.listen(port);
