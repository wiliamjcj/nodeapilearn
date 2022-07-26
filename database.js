const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "abc123",
    database: "nodeapi1"
})

client.connect()

module.exports = client