const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/router.js');

app.use('/src', express.static(path.resolve('src')));

app.use(router);

app.listen(80, 'server is running at http://127.0.0.1');
