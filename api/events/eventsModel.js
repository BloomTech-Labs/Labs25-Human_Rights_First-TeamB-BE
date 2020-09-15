const db = require('../../data/db-config.js');

module.exports = {
  getTable,
  add,
};

function getTable() {
  return db('data as d').select('d.id as ID', 'd.event as Event');
}
function add(event) {
  // console.log("I'm an event!!", event);
  return db('data')
    .insert(event)
    .then((res) => {
    res.json({ success: true, message: 'ok' });     // respond back to request
 })
}
