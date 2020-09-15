const axios = require('axios');
const model = require('./api/events/eventsModel');

function axiData() {
  axios
    .get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata')
    .then((res) => {
      var sci = JSON.parse(res.data);
      for (let i in sci) {
        var eventObj = {
          eventId: sci[i].id,
          event: sci[i],
        };
        model.add(eventObj);
      }
    })
    .catch((err) => {
      console.log('axios error', err);
    });
}
// setTimeout(axiData(), 10000);
