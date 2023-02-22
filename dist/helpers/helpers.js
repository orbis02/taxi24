"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCoordinates = exports.cleanJoiValidator = exports.getCoordinates = exports.arraySorter = exports.calculateDistance = void 0;
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    if (lat1 == lat2 && lon1 == lon2) {
        return 0;
    }
    else {
        let radianeslat1 = (Math.PI * lat1) / 180;
        let radianeslat2 = (Math.PI * lat2) / 180;
        let theta = lon1 - lon2;
        let radtheta = (Math.PI * theta) / 180;
        let dist = Math.sin(radianeslat1) * Math.sin(radianeslat2) + Math.cos(radianeslat1) * Math.cos(radianeslat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return parseFloat(dist.toFixed(1));
    }
};
exports.calculateDistance = calculateDistance;
const arraySorter = (myArray) => {
    return myArray.sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
        if (a.distance > b.distance) {
            return 1;
        }
        return 0;
    });
};
exports.arraySorter = arraySorter;
const getCoordinates = (coords) => {
    coords = coords.replace(" ", "").split(",");
    return {
        lat: coords[0],
        lon: coords[1],
    };
};
exports.getCoordinates = getCoordinates;
const cleanJoiValidator = (error) => error.replace(/[^a-zA-Z ]/g, "");
exports.cleanJoiValidator = cleanJoiValidator;
const validateCoordinates = (lat, lon) => {
    const ck_lat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
    const ck_lon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;
    const validLat = ck_lat.test(lat);
    const validLon = ck_lon.test(lon);
    if (validLat && validLon) {
        return true;
    }
    else {
        return false;
    }
};
exports.validateCoordinates = validateCoordinates;
//# sourceMappingURL=helpers.js.map