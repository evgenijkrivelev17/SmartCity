var express = require('express');

var app = express();
const APP_PORT = '3000',
    HOST_NAME = '192.168.100.3';


app.listen(APP_PORT, HOST_NAME, () => {
    console.log('Server is running');
});
