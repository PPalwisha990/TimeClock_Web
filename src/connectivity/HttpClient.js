import request from "superagent";
import { log } from "../commons/Common";
import { logout } from "./Api";

export const post = (url, params) => {
  log("URL: ", url);
  log("Sending POST request: ", {
    url,
    params,
  });
  return new Promise((resolve, reject) => {
    log("URL: ", url);

    if (params) {
      Object.keys(params).map((key) => {
        let value = params[key] ? params[key] : "";
        request.field(key, value);
      });
    }

    log("Params: ", params);

    request
      .then((response) => {
        log("Response: ", response);
        if (response.text == "REAUTH") {
          logout();
        }
        resolve(response.text);
      })
      .catch((error) => {
        log("Error: ", error.response);
        reject(error);
      });
  });
};

export const postMultipart = (url, params) => {
  log("URL: ", url);
  log("Sending POST request: ", {
    url,
    params,
  });
  return new Promise((resolve, reject) => {
    const client = request.post(url).set("Content-Type", "multipart/form-data");

    Object.keys(params).forEach((key, index) => {
      if (params[key]) {
        client.field(key, params[key]);
      }
    });

    client.end((err, res) => {
      if (!err) {
        log("Request successful: ", res.text);
        if (!res.text.includes("REAUTH")) {
          resolve(res.text);
        } else {
          reject("REAUTH");
        }
      } else {
        log("Request error: ", err);
        reject(err);
      }
    });
  });
};

export const get = (url, params) => {
  log("URL: ", url);
  log("Sending GET request: ", {
    url,
    params,
  });
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .query(params)
      .then((res) => {
        log("Request successful: ", res.text);
        if (!res.text.includes("REAUTH")) {
          resolve(res.text);
        } else {
          reject("REAUTH");
        }
      })
      .catch((err) => {
        log("Request error: ", err);
        reject(err);
      });
  });
};
