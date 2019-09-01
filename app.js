const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./Darksky/weather');

const argv = yargs
  .options({
  a: {
    demand:true,
    alias: 'address',
    describe: 'address to fetch weather for',
    string: true
  }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage,results) => {
if (errorMessage)
{
  console.log(errorMessage);
}
else{
  console.log(JSON.stringify(results,undefined,2));
  //var resultJSON= JSON.parse(results);
  console.log(results.latitude);
  console.log(results.longitude);
  //weather.weatherinfo(results.latitude,results.longitude,weatherresults) => {
weather.weatherinfo(results.latitude,results.longitude,(errorMessage,weatherresults) => {
 

if (errorMessage)
{
  console.log(`Weather Error: ${errorMessage}`);
}
else {
  console.log(JSON.stringify(weatherresults,undefined,2));

}

});

}

});
