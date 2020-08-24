const db = require(../../config/dsConfig.js); //I don't know why it's yelling at me but it's gonna have a bad day

module.exports = {
  get,
  //   getByID,
};

function get() {
  return db('science as s')
    .select(
      's.id as ID',
      's.pb_id as PB_ID',
      's.state as State',
      's.city as City',
      's.date as Date',
      's.title as Title',
      's.description as Description',
      's.links as Links',
      's.data as Data',
      's.geocoding as Geocoding'
    )
    .orderBy('s.date');
}

// function getByID(id) {
//   return db('science as s').where({ id }).first;
// }
