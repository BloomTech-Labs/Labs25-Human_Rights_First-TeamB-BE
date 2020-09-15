const db = require('../../data/db-config.js');

module.exports = {
  getTable,
  add,
};

function getTable() {
  return db('data as d').select('d.id as ID', 'd.event as Event');
}
function add(event) {
  return db('data')
    .select()
    .where('eventId', event.eventId)
    .then((rows) => {
      console.log('Start');
      if (rows.length === 0) {
        console.log('Success');
        return db('data').insert(event);
      } else {
        console.log('Failure');
        throw 'Duplicate ID Encountered';
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
