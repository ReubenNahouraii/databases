var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
  
});

con.connect(function(err) {
  if (err) { throw err; }
  console.log('Connected!');
});

exports.con = con;