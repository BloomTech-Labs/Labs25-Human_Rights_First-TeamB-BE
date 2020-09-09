const axios = require("axios");
function getData() {
    axios.get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=100')
    .then((res) => {
        // console.log(res)
        sci = JSON.parse(res.data)
        console.log(sci)
    })
    .catch((err) => {
        console.log(err)
    })

    // const arr = [];
    // const res = async () => {
    //     return await axios.get('http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata?pullnum=10')
    // }
    // console.log("res", res)
    // for (let item in res.data) {
    //     console.log("item",item)
    // //   arr.push({
    // //     eventId: data[item].id,
    // //     event: data[item],
    // //   });
    // }
    // console.log(arr)
    // return arr;
}
getData();