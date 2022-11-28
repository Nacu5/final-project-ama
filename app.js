import { createConnection } from 'mysql';

const connection = createConnection (config, {
host: "localhost",
user: "root",
database: "legal",
password: "marseille_93"
});

connection.connect (),
           console.log ('Database OK')
    