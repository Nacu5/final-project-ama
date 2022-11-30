import { createConnection } from 'mysql';

const connection = createConnection (config, {
host: "localhost",
user: "root",
database: "legal",
password: "12345678"
});

connection.connect (),
           console.log ('Database OK')
