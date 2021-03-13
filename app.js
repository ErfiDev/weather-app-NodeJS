const chalk = require("chalk");
const getGeocode = require("./utils/geocode");
const getWeather = require("./utils/getWeather");

const address = process.argv[2];

if(!address){ console.log(chalk.blue("please provide address")) }
else{
  getGeocode(address , (err , res)=>{
      if(err) { console.log(chalk.red.bold(err)) }
      else{
          getWeather(res[0] , res[1]);
      }
  });
}
