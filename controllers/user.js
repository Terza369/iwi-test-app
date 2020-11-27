const fetch = require('node-fetch');

const User = require('../models/user');
const Coordinates = require('../models/coordinates');

exports.getUserMatches = (req, res, next) => {
    console.log('GET /user/matches');
    
    let queryCoordinates = Object.assign(new Coordinates(), {latitude: req.query.latitude, longitude: req.query.longitude});

    User.findMatches(queryCoordinates, req.query.radius)
        .then(matches => {
            let promiseArray = [];
            matches.forEach(match => {
                const hereEndPoint = 'revgeocode.search.hereapi.com/v1/revgeocode';
                const hereApiKey = process.env.HERE_API_KEY;
                const hereApiUrl = `https://${hereEndPoint}?at=${match.location.coordinates.latitude}%2C${match.location.coordinates.longitude}&lang=en-US&apiKey=${hereApiKey}`;
                const promise = fetch(hereApiUrl)
                    .then(result => {
                        match.location.address = result.json().items[0].address.label;
                        return match;
                    })
                    .catch(err => console.log(err));
                promiseArray.push(promise);
            });
            return Promise.all(promiseArray);
        })
        .then(matches => {
            console.log(matches.length + ' matches found');
            res.status(200).json({
                matches: matches
            });
        })
        .catch(err => console.log(err));
}