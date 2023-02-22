import { Injectable } from "@nestjs/common";

@Injectable()
export class GeolacalitationServices{
/**
 * Fórmula del semiverseno, 
 * la cual es una variante de la fórmula de Haversine y se considera más eficiente en términos de rendimiento. 
 * La fórmula del semiverseno es la siguiente:
 * a = sin²(Δlat/2) + cos(lat1) * cos(lat2) * sin²(Δlon/2)
c = 2 * atan2( √a, √(1−a) )
d = R * c
 */
    calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const earthRadius = 6371; // Radio de la Tierra en kilómetros
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(this.degreesToRadians(lat1)) * Math.cos(this.degreesToRadians(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = earthRadius * c;
    
        return distance;
      }
    
      private degreesToRadians(degrees: number): number {
        return degrees * Math.PI / 180;
      }
      
      getTopThreeLocations(locations) {
    
        const topThreeLocations = locations.sort((a, b) => (a.distance > b.distance) ? 1 : -1).slice(0, 3);
        return topThreeLocations;

      }
      

}