const db = require(../../config/dsConfig.js); //I don't know why it's yelling at me but it's gonna have a bad day
const axi = require(../../axios.js)

module.exports = {
  get,
};

function get() {
  axios
    .get('https://api.846policebrutality.com/api/incidents')
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return error;
    });
}
