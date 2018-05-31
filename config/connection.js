var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'Fuckyounow24_',
    database: 'burgers_db' 
});

connection.connect(function(err) {
    if (err) {
        console.log("Error connecting to: " + err,stack);
        return;
    }
    console.log("connected as id " + connection.treadId);
})

module.exports = connection;
