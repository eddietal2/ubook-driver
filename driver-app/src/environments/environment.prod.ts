// Production Environment App

const ip = '10.0.1.4';
const baseUrl = `http://${ip}:4000`;


export const environment = {
  production: true,
  url: baseUrl,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZWRkaWV0YWwyIiwiYSI6ImNrZWRzbDd3cTA2NnkzMm5qazZqeDRqeXQifQ.cSA7bCR0Z2FSxm1Ipcxgjw'}
};
