const request = require("postman-request");
const chalk = require("chalk");

function getWeather(longi , lati)
{
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=6cead677b4563809592af602e1e2344a&units=metric`
    request({url: urlWeather} , (err , res)=>{
        if(err)
        {
            console.log(err);
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
}

module.exports = getWeather;