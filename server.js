const express = require('express');
const cors = require('cors');
const app = express();
require('./src/Routes/index')(app);
app.use(cors());
app.use(express.json());
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});