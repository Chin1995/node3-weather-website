// const request = require("request");
// const forecast = (coordinates1, coordinates2, callback) => {
//   const url2 =
//     "http://api.weatherstack.com/current?access_key=28a942b4dbb712c00ad1345e3e098dea&query=" +
//     coordinates1 +
//     "," +
//     coordinates2 +
//     "&units=f";

//   request({ url: url2, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather services", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find coordinates. Try another search", undefined);
//     } else {
//       callback(
//         undefined,
//         `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees out`
//       );
//     }
//   });
// };
// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });
// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=28a942b4dbb712c00ad1345e3e098dea&query=" +
//     latitude +
//     "," +
//     longitude +
//     "&units=f";
//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather services", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(undefined, undefined);
//     }
//   });
// };
/*
const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=28a942b4dbb712c00ad1345e3e098dea&query=" +
    longitude +
    "," +
    latitude +
    "&units=f";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
*/
//Challenge for restructuring

const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=28a942b4dbb712c00ad1345e3e098dea&query=" +
    longitude +
    "," +
    latitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees out. The current humidity is ${body.current.humidity}`
      );
    }
  });
};

module.exports = forecast;
