const express = require('express');
const bodyParser = require('body-parser');
const router = require('./main_router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/',router);

const server = app.listen(8080, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log(`API is running at http://${host}:${port}`)
});