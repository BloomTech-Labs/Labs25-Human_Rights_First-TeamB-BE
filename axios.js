const axios = require('axios');
const file = require('./data/incidents.json')

module.exports = {
  axiFunc,
  dataFunc,
};

// Direct API Call
function axiFunc() {
  axios
    .get('https://api.846policebrutality.com/api/incidents')
    .then((response) => {
      // data = response.data.data;
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
  // var help = "please give me data";
  // return help;
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
// console.log('File: ', file[data]);
function fileRead(){
  file.data.forEach(item => {
    id: count += 1,
    eventId: item.id,
    event: item
  })
}

fileRead();