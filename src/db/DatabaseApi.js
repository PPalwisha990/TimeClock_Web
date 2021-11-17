const axios = require("axios");

export const refreshTables = (webhrData) => {
  return new Promise((resolve, reject) => {
    const data = { data: webhrData };
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .post("http://localhost:4000/getData", data, config)
      .then(function (response) {
        console.log("Response: ", response);
        resolve(response.data);
      })
      .catch(function (error) {
        console.log("Error: ", error);
        reject(error);
      });
  });
};

export const test = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:4000/getTest")
      .then(function (response) {
        console.log("Response: ", response);
        resolve(response.data);
      })
      .catch(function (error) {
        console.log("Error: ", error);
        reject(error);
      });
  });
};
