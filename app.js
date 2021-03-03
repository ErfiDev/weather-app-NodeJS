const request = require("postman-request");
const chalk = require("chalk");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.09024&lon=-95.712891&appid=6cead677b4563809592af602e1e2344a&units=metric";

request({url: url} , (err , res)=>{
    if(err)
    {
        console.log("Unable to connect to weather service!");
    }
    else
    {
        const response = JSON.parse(res.body);
        if(response.message)
        {
            console.log(chalk.red(response.message));
        }
        else
        {
            console.log("City Name: " + chalk.blue(response.name));
            console.log("Temp: " + chalk.green(`${response.main.temp}C`));
        }
    }
});


