const request = require("postman-request");
const chalk = require("chalk");

function getGeocode(location)
{
    const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}
    .json?access_token=pk.eyJ1IjoiZXJmYW5oYW5pZmV6YWRlMTEiLCJhIjoiY2trY2N5YnU2MDg2dzJwcGl3MHQ4dmd1ayJ9.6Watree8ZLL8rLI8HO29cg`;

    request({ url: urlMapBox } , (err , res)=>{
        if(err){ console.log(chalk.red.bold(err.code)); }

        else{
            const response = JSON.parse(res.body);
            const {features} = response;
            const longi = features[0].center[0];
            const lati = features[0].center[1];
            getWeather(longi , lati);
        }
    });
}

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

getGeocode("karaj");