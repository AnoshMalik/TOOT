const knex = require("knex");
const config = require("../knexfile.js");
const debe = knex(config.development);

//module.exports = knex(config.development);
module.exports = debe;
