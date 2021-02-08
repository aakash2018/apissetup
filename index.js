require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors');
const bodyParser = require('body-parser');
// var jwt=require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(require('./routes'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers: Authorization, Lang")
    next();
});

app.listen(process.env.PORT, () => {
    console.log("server is running port " + process.env.PORT)
})