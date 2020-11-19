module.exports = class Coordinates {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    calculateDistance(coordinates) {
        const R = 6371e3;
        const fi1 = this.latitude * Math.PI/180;
        const fi2 = coordinates.latitude * Math.PI/180;
        const deltaFi = (coordinates.latitude - this.latitude) * Math.PI / 180;
        const deltaLambda = (coordinates.longitude - this.longitude) * Math.PI / 180;
    
        const halfLegthSquare = Math.sin(deltaFi / 2) * Math.sin(deltaFi / 2) + Math.cos(fi1) * Math.cos(fi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
        const angularDistance = 2 * Math.atan2(Math.sqrt(halfLegthSquare), Math.sqrt(1 - halfLegthSquare));
    
        const distance = Math.round(R * angularDistance);
    
        return distance;
    }
}