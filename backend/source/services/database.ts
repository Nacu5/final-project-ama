let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '@sud0xx',
  database: 'specialisti'
});

connection.connect(function(err: any) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

export default connection;