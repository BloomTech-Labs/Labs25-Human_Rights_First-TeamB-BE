const axios = require('axios');

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
  axios.get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10')
  .then( (res) => {
    console.log(JSON.parse(res.data))  // Data is available here!
    // From here Call your model and save the data into your database
  })
  .catch( (err) => {
    console.log(err)
  })


// async function dataFunc() {
//   const { data } = await axios.get(
//     'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10'
//   );
//   const jData = JSON.parse(data);
//   console.log(jData);
//   return jData;

  // async function dataFunc() {
  //   var get = await axios.get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10')
  //   const getMap = get.map(item => {
  //     return item
  //   });

  // promise = axios.get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10')
  // Promise.all([promise])
  // .then((values) => {
  //   console.log("nice!")
  //   return values;
  // })

  // try{
  // return data = await axios.get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10')
  // } catch (err) {
  // console.log("Error occured:", err)
  // }

  // axios.get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10')
  // .then((response) => {
  //   data = response.data;
  //   console.log(JSON.parse(data));
  //   // promise.all -> resolve into database
  //   //loop over array (map?)
  //   return response.data;
  // })
  // .catch((error) => {
  //   console.log('DS is an error', error);
  //   return 'This is broken';
  // });
}

// var data = axiFunc();
dataFunc();

// console.log('Axi: ', axiFunc());
// console.log('Science: ', dataFunc());
// console.log('Data: ', data);
