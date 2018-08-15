const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'postgres',
    user: 'docker',
    password: 'docker',
    database: 'docker',
    charset: 'utf8',
  },
  pool: {
    min: 0,
    max: 10,
  },
});

module.exports.connect = () => knex;
