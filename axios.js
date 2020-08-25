const axios = require('axios');

// Direct API Call
axios
  .get('https://api.846policebrutality.com/api/incidents')
  .then((response) => {
    console.log(response.data.data);
  })
  .catch((error) => {
    console.log(error);
  });

// Data Science Call
// axios
//   .get('')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
