// For hosting, using node express.

const express = require('express');
const path = require('path');

const app = express();

app.use(cors());

const api = require('./api');
// Set our api routes
app.use('/api', api);

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);
