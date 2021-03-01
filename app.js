const request = require("postman-request");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.09024&lon=-95.712891&appid=6cead677b4563809592af602e1e2344a";

request({url: url} , (err , res)=>{
    const toJS = JSON.parse(res.body);

    console.log(toJS);  
});

