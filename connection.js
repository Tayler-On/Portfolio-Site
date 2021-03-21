const { Pool } = require("pg");
const { secrets } = require("./secrets");
const credentials = new Pool({
  user: secrets.user,
  password: secrets.password,
  host: secrets.host,
  port: 5432,
  database: "Projects-Portfolio-Site",
  ssl: false,
});

module.exports = credentials;
