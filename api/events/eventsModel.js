const db = require(../../config/dsConfig.js); //I don't know why it's yelling at me but it's gonna have a bad day
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
      console.log(res); // Data is available here!
      // From here Call your model and save the data into your database
    })
    .catch((err) => {
      console.log(err);
    });
}
