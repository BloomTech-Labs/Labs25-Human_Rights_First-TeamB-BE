const axios = require('axios');

module.exports = {
  axiFunc,
  dataFunc,
};

let data;

// Direct API Call
function axiFunc() {
  axios
    .get('https://api.846policebrutality.com/api/incidents')
    .then((response) => {
      data = response.data.data;
      // console.log(data)
      return response.data.data;
    })
    .catch((error) => {
      console.log('this is an error', error);
      return 'This is broken';
    });
}

// Data Science Call
function dataFunc() {
  axios
    .get(
      'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=1'
    )
    .then((response) => {
      data = response.data;
      // console.log(data);
      return response.data;
    })
    .catch((error) => {
      console.log('DS is an error', error);
      return 'This is broken';
    });
}

// axiFunc();
// dataFunc()

console.log('Axi: ', axiFunc());
console.log('Science: ', dataFunc());
console.log('Data: ', data);
