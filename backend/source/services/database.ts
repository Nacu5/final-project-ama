import environment from '../environment';

let mysql = require('mysql');

let connection = mysql.createConnection({
  host: environment.dbHost,
  user: environment.dbUser,
  password: environment.dbPassword,
  database: environment.dbName
});

connection.connect(function(err: any) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

export default connection;