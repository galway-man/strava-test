const strava = require('strava-v3');

strava.athlete.get({}, (err,payload,limits) => console.log({err,payload,limits}));
