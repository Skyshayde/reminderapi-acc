const express = require('express');
const bodyParser = require('body-parser');
const router = require('./main_router');
require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;

var token = process.env.DB_PASS
var url = `mongodb+srv://reminderapi-service:${token}@reminderapi-acc-qavww.gcp.mongodb.net/lists?retryWrites=true`

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
   const collection = client.db("reminderapi").collection("lists");
   client.close();
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/',router);

app.listen(3000, () => { console.log('API is running at http://localhost:3000')});