const rp = require('request-promise');
const knex = require('../util/knex-connector');

const uploadToDb = (form) => {
  const { firstname, surname, cv, workTime } = form;
  const db = knex.connect();
  return db('Applications')
    .returning('*')
    .insert({
      firstname,
      surname,
      cv,
      work_time: workTime,
    });
}

module.exports = {
  uploadToDb,
}