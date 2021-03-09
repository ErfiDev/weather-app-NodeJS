const request = require("postman-request");

function getGeocode(location , callback)
{
    const urlMapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}
    .json?access_token=pk.eyJ1IjoiZXJmYW5oYW5pZmV6YWRlMTEiLCJhIjoiY2trY2N5YnU2MDg2dzJwcGl3MHQ4dmd1ayJ9.6Watree8ZLL8rLI8HO29cg`;

    request({ url: urlMapBox } , (err , res)=>{
        if(err){ callback(err.code , undefined) }

        else{
            const response = JSON.parse(res.body);
            const {features} = response;
            const longi = features[0].center[0];
            const lati = features[0].center[1];

            callback(undefined , [longi , lati]);
        }
    });
}


module.exports = getGeocode;