const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "1234",
    database: "mydb"
})

module.exports = pool;