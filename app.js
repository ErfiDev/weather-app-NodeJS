const chalk = require("chalk");
const getGeocode = require("./utils/geocode");
const getWeather = require("./utils/getWeather");


getGeocode("tehran" , (err , res)=>{
    if(err) { console.log(chalk.red.bold(err)) }
    else{
        getWeather(res[0] , res[1]);
    }
});