var mysql = require("mysql");
require('dotenv').config()

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "testdb"
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});

module.exports = connection;
