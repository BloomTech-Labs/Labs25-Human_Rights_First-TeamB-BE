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
    .insert(event)
    .then(() => {
      console.log('We did it! We saved the town!');
    })
    .catch((err) => {
      // if (
      //   err.message.includes('duplicate key value violates unique constraint')
      // ) {
      //   console.log('Duplicate Event ID Detected!');
      // }
      console.log('Shit', err);
    });
}
