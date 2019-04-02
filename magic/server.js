const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use('/magic', express.static(__dirname));

app.get('/magic/*', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

const server = http.createServer(app);
server.listen(port, () => console.log('Running...'));