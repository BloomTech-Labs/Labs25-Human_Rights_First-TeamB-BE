const file = require('../incidents.json');
const axios = require('axios');
const db = require('../db-config');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('data')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert(getData());
    });
};

function getData() {
  const arr = [];
  const data = file.data;
  for (let item in data) {
    arr.push({
      eventId: data[item].id,
      event: data[item],
    });
  }
  axios
    .get(
      'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=100'
    )
    .then((res) => {
      var sci = JSON.parse(res.data);
      for (let datum in sci) {
        if (db.includes(sci.id) == false) {
          arr.push({
            eventId: sci[datum].id,
            event: sci[datum],
          });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return arr;
}
