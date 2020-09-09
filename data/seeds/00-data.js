const file = require('../incidents.json');
exports.seed = function (knex) {
  return knex('data')
    .truncate()
    .then(function () {
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
  return arr;
}
// DS API: http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?