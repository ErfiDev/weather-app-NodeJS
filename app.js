const request = require("postman-request");
const chalk = require("chalk");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.09024&lon=-95.712891&appid=6cead677b4563809592af602e1e2344a&units=metric";

const mapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXJmYW5oYW5pZmV6YWRlMTEiLCJhIjoiY2trY2N5YnU2MDg2dzJwcGl3MHQ4dmd1ayJ9.6Watree8ZLL8rLI8HO29cg";

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

request({url: mapBox} , (err , res)=>{
    console.log(JSON.parse(res.body));
});

