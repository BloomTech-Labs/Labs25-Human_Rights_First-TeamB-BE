const axios = require('axios');
const db = require('./data/db-config');
const model = require("./api/events/eventsModel")

function axiData() {
  axios
  .get(
    'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10'
  )
  .then((res) => {
      //sci is arr
    var sci = JSON.parse(res.data);
    // console.log(sci)
    //datum is obj
    for (i in sci){
        // console.log("yay!", sci[i])
        eventObj = {
            eventId: sci[i].id,
            event: sci[i]
        }
        model.add(eventObj)
    }
  })
  .catch((err) => {
    console.log(err);
  })
}
axiData();