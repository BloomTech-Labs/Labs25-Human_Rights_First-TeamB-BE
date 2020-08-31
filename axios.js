const axios = require('axios');

module.exports = {
  axiFunc,
};

let data = [];
function axiFunc() {
  // Direct API Call
  axios
    .get('https://api.846policebrutality.com/api/incidents')
    .then((response) => {
      data = JSON.stringify(response.data.data);
      // console.log('this is the then', data);
      // return response.data.data;

      // console.log(response.data.data);
    })
    .catch((error) => {
      console.log('this is an error', error);
      return 'This is broken';
    });
  // .finally(() => {
  //   // console.log('this is the finally');
  //   // console.log(data);
  //   return data;
  // })
}

// Data Science Call
// axios
//   .get('')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log(data);
