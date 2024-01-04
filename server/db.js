const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "api2",
    password: "qtk2108##tu",
    port: "5432",
})

module.exports = pool;