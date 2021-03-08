// This file can be replaced during build by using the `fileReplacements` array.

// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

// The list of file replacements can be found in `angular.json`.

// const url is commented out depending on which you are testing with.


import 'zone.js/dist/zone-error';

const ip = '10.0.1.4';
const baseUrl = `http://${ip}:4000`;
const googleAPIKey = 'AIzaSyCcCS5t7NJlCYCgeuAe1ESYVr_r-E0WkrI'

export const environment = {
  production: false,
  url: baseUrl,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZWRkaWV0YWwyIiwiYSI6ImNrZWRzbDd3cTA2NnkzMm5qazZqeDRqeXQifQ.cSA7bCR0Z2FSxm1Ipcxgjw'}
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
