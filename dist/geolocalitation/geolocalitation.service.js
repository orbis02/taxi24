"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolacalitationServices = void 0;
const common_1 = require("@nestjs/common");
let GeolacalitationServices = class GeolacalitationServices {
    calculateDistance(lat1, lon1, lat2, lon2) {
        const earthRadius = 6371;
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.degreesToRadians(lat1)) * Math.cos(this.degreesToRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;
        return distance;
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    getTopThreeLocations(locations) {
        const topThreeLocations = locations.sort((a, b) => (a.distance > b.distance) ? 1 : -1).slice(0, 3);
        return topThreeLocations;
    }
};
GeolacalitationServices = __decorate([
    (0, common_1.Injectable)()
], GeolacalitationServices);
exports.GeolacalitationServices = GeolacalitationServices;
//# sourceMappingURL=geolocalitation.service.js.map