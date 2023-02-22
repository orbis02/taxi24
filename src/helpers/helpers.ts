export const calculateDistance = (lat1, lon1, lat2, lon2) => {

/**
    La fórmula que se presenta es conocida como la "fórmula de Haversine", 
    la cual se utiliza para calcular la distancia en kilómetros entre dos puntos en la superficie de la Tierra, 
    dados sus respectivos valores de latitud y longitud.
    La fórmula consta de varias etapas que se explican a continuación:
    Convertir los valores de latitud y longitud de los puntos en radianes.
    Esto se hace para poder utilizar las funciones trigonométricas trigonométricas en la fórmula. 
    La conversión se realiza utilizando la fórmula radianes = grados * (π / 180).
    Calcular la diferencia de longitud entre los dos puntos, también en radianes.
    Utilizar las funciones trigonométricas para calcular la distancia entre los dos puntos. 
    La fórmula es d = acos(sin(lat1) * sin(lat2) + cos(lat1) * cos(lat2) * cos(lon1 - lon2)). 
    En esta fórmula, lat1 y lat2 son las latitudes de los dos puntos en radianes, lon1 y lon2 son las longitudes de los dos puntos en radianes,
    sin y cos son las funciones trigonométricas seno y coseno, y acos es la función inversa del coseno.

    Convertir la distancia a grados y luego a millas. La distancia calculada en la etapa anterior está en unidades de radianes, 
    por lo que se convierte a grados y se multiplica por 60 (para convertir de grados a millas náuticas) 
    y por 1.1515 (para convertir de millas náuticas a millas terrestres). Finalmente, se multiplica por 1.609344 para convertir de millas terrestres a kilómetros.
    Devolver la distancia calculada como un valor numérico redondeado a una sola cifra decimal.
    En resumen, esta fórmula es una manera de calcular la distancia en kilómetros entre dos puntos en la superficie de la Tierra utilizando sus valores de latitud y longitud.
   **/

    //validamos las cordenadas
    if (lat1 == lat2 && lon1 == lon2) {
      return 0; //si son iguales retornamos un 0 
    } else {

      let radianeslat1 = (Math.PI * lat1) / 180;  //Convertir los valores de latitud y longitud de los puntos en radianes.
      let radianeslat2 = (Math.PI * lat2) / 180; //  Convertir los valores de latitud y longitud de los puntos en radianes.
      let theta = lon1 - lon2; //Calcular la diferencia de longitud entre los dos puntos, también en radianes.
      let radtheta = (Math.PI * theta) / 180; //también en radianes.
      let dist = Math.sin(radianeslat1) * Math.sin(radianeslat2) +  Math.cos(radianeslat1) * Math.cos(radianeslat2) * Math.cos(radtheta); //formula para calcular la distancia entre dos puntos terrestres  por Haversine. 
      dist = Math.acos(dist); //distancia en radianes
      dist = (dist * 180) / Math.PI; //La distancia calculada en la etapa anterior está en unidades de radianes, por lo que se convierte a grados 
      dist = dist * 60 * 1.1515; //se multiplica por 60 (para convertir de grados a millas náuticas) 
      dist = dist * 1.609344; //Finalmente, se multiplica por 1.609344 para convertir de millas terrestres a kilómetros.
      return parseFloat(dist.toFixed(1));
    }
  };
  export const arraySorter = (myArray) => {
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
  
  export const getCoordinates = (coords) => {
    coords = coords.replace(" ", "").split(",");
    return {
      lat: coords[0],
      lon: coords[1],
    };
  };
  
  export const cleanJoiValidator = (error) => error.replace(/[^a-zA-Z ]/g, "");
  
  // function modified from https://stackoverflow.com/questions/11475146/javascript-regex-to-validate-gps-coordinates
  export const validateCoordinates = (lat, lon) => {
    const ck_lat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
    const ck_lon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;
    const validLat = ck_lat.test(lat);
    const validLon = ck_lon.test(lon);
    if (validLat && validLon) {
      return true;
    } else {
      return false;
    }
  };