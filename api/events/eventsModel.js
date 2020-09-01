const db = require('../../config/dsConfig.js');
// const axi = require(../../axios.js)
const axios = require('axios');

module.exports = {
  get,
};
function get() {
  axios
    .get(
      'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10'
    )
    .then((res) => {
      console.log(db);
      console.log(res); // Data is available here!
      // From here Call your model and save the data into your database
    })
    .catch((err) => {
      console.log(err);
    });
}
