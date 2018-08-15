const rp = require('request-promise');
const knex = require('../util/knex-connector');

const requestSignedUrl = () => rp.get('https://urlsigner-uiczqjvmcp.now.sh/?objectName=cv.pdf');

const uploadToDb = (form) => {
  const { firstname, surname, cv } = form;
  const db = knex.connect();
  return db('Applications')
    .returning('*')
    .insert({
      firstname,
      surname,
      cv,
    });
}

module.exports = {
  requestSignedUrl,
  uploadToDb,
}