const axios = require('axios');
const model = require('./api/events/eventsModel');

function axiData() {
  axios
    .get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata')
    .then(async (res) => {
      if (res.data == '[]') {
        console.log('\nNo New Data\n');
      } else {
        var sci = JSON.parse(res.data);
        for (let i in sci) {
          var eventObj = {
            eventId: sci[i].id,
            event: sci[i],
          };
          await model.add(eventObj);
        }
        process.exit(0);
      }
    })
    .catch((err) => {
      console.log('axios error', err);
    });
}
axiData();
