//connection to PGAdmin database
const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "egov_demo",
    port: 5432,
    password: "bstcBel123",
    database: "bel_cb_dev", 
});

module.exports = client
