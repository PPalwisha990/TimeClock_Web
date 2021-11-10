const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const isDev = require("electron-is-dev");

// Initializing a new database

const openDatabase = () => {
  const db = new sqlite3.Database(
    isDev
      ? path.join(__dirname, "../db/time-clock.sqlite3") // my root folder if in dev mode
      : path.join(process.resourcesPath, "db/time-clock.sqlite3"), // the resources path if in production build
    (err) => {
      if (err) {
        console.log(`Database Error: ${err}`);
      } else {
        console.log("Database Loaded");
      }
    }
  );
  return db;
};

module.exports = { openDatabase };
