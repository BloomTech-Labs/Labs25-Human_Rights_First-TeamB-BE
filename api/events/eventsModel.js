const db = require('../../data/db-config.js');

module.exports = {
  getTable,
};

function getTable() {
  return db('data as d').select('d.id as ID', 'd.event as Event');
}
