const { Client } = require('pg')


let herokuDbUrl = 'postgres://lnwbhowwvdzvab:c479a2ff226065136841925ed50e1fc9c22449932698cfc62ecc513cdb705f6b@ec2-3-213-228-206.compute-1.amazonaws.com:5432/deppk9kejf1vkd'
let localDbUrl = 'postgres://postgres:abc123@localhost:5432/nodeapi1'

const client = new Client({
    connectionString: process.env.DATABASE_URL || localDbUrl
    /*,ssl: {
        rejectUnauthorized: false
    }*/
})

client.connect()

module.exports = client