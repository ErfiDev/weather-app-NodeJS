const chalk = require("chalk");
const yargs = require("yargs");
const getGeocode = require("./utils/geocode");
const getWeather = require("./utils/getWeather");

yargs.command({
    command: "city",
    describe: "enter your city name",
    builder: {
      name: {
        describe: "your city name",
        demandOption: true,
        type: "string",
      }
    },
    handler(argv){
        getGeocode(argv.name , (err , res)=>{
            if(err) { console.log(chalk.red.bold(err)) }
            else{
                getWeather(res[0] , res[1]);
            }
        });
    }
});

console.log(yargs.argv);