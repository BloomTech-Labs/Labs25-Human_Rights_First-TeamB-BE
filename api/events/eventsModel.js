const db = require(../../config/dsConfig.js); //I don't know why it's yelling at me but it's gonna have a bad day
const axi = require(../../axios.js)

module.exports = {
  get,
  //   getByID,
};

function get() {
  // return db('science as s')
  //   .select(
  //     's.id as ID',
  //     's.pb_id as PB_ID',
  //     's.state as State',
  //     's.city as City',
  //     's.date as Date',
  //     's.title as Title',
  //     's.description as Description',
  //     's.links as Links',
  //     's.data as Data',
  //     's.geocoding as Geocoding'
  //   )
  //   .orderBy('s.date');
  axios
    .get('https://api.846policebrutality.com/api/incidents')
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error;
    });
}

// function getByID(id) {
//   return db('science as s').where({ id }).first;
// }
