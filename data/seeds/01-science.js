const axios = require('axios');
const db = require('../db-config');

exports.seed = function (knex) {
  return knex('data')
    .truncate()
    .then(function () {
      return knex('data').insert(getSci());
    });
};

function getSci() {
  axios
    .get(
      'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=100'
    )
    .then((res) => {
      // console.log(res)
      var sci = JSON.parse(res.data);
      // console.log(sci)
      // if (sci.id != db.eventId) {
      const obj = {
        eventId: sci.id,
        event: sci,
      };
      return obj;
      // }
    })
    .catch((err) => {
      console.log(err);
    });
}
