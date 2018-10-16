const express = require('express');
const bodyParser = require('body-parser');
const router = require('./main_router');

const app = express();

app.use(bodyParser.json());

app.use('/',router);

app.listen(3000, () => { console.log('API is running at http://localhost:3000')});