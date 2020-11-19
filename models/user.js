const db = require('../util/db');
const Coordinates = require('../models/coordinates');

module.exports = class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static getAll() {
        return db.execute(
            `SELECT users.*, coordinates.latitude, coordinates.longitude FROM users
            JOIN coordinates ON users.id = coordinates.userId`
            )
            .then(([users, metaData]) => {
                for(let i = 0; i < users.length; i++) {
                    const coordinates = Object.assign(new Coordinates(), {
                        latitude: users[i].latitude,
                        longitude: users[i].longitude
                    });
                    users[i] = Object.assign(new User(), {
                        id: users[i].id,
                        username: users[i].username,
                        email: users[i].email,
                        location: {
                            coordinates: coordinates
                        }
                    });
                }
                return users;
            })
            .catch(err => console.log(err));
    }

    static findMatches(sourceCoordinates, radius = 1000) {
        return User.getAll()
            .then(users => {
                let matches = [];
                users.forEach(user => {
                    let distance = user.location.coordinates.calculateDistance(sourceCoordinates);
                    if(distance < radius) {
                        matches.push(user);
                    }
                });
                return matches;
            })
            .catch(err => console.log(err));
    }
}