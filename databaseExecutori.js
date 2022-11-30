const { create } = require('mysql')
const {createPool} = require  ('mysql')

const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: '12345678'
});

pool.query ('select * from specialisti.executori', (err, res)=>{
    return console.log (res)
})