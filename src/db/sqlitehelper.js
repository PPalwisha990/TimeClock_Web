const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const isDev = require("electron-is-dev");

// Initializing a new database
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

const executeQuery = (query, params, resolve, reject) => {
  console.log("Query: " + query);
  db.run(query, params, function (err) {
    if (err) {
      console.log("Error running sql " + err);
      console.log(err);
      reject(err);
    } else {
      resolve();
    }
  });
};

const executeMultipleQueries = (queries, params, resolve, reject) => {
  queries.map((query) => {
    console.log("Query: " + query);
    db.run(query, params, function (err) {
      if (err) {
        console.log("Error running sql " + err);
        console.log(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
  resolve();
};

const createTable = (tableName, tableFields) => {
  return new Promise((resolve, reject) => {
    try {
      const query = tableFields.reduce(
        (sqlSegment, field, index, arr) =>
          `${sqlSegment} ${field.columnName} ${field.dataType} ${
            index + 1 === arr.length ? ");" : ","
          }`,
        `CREATE TABLE IF NOT EXISTS ${tableName}(`
      );
      executeQuery(query, [], resolve, reject);
    } catch (error) {
      reject(error);
      console.error(error);
    }
  });
};

const insert = (tableName, dataArr) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(dataArr))
      reject(`Parameter items expects array but ${typeof dataArr}`);

    try {
      const queries = dataArr.map((item) => {
        const columns = Object.keys(item);
        let sqlStr = columns.reduce(
          (sqlSegment, columnName, index, arr) =>
            `${sqlSegment} ${columnName} ${
              index + 1 === arr.length ? ")" : ","
            }`,
          `INSERT INTO ${tableName} (`
        );
        sqlStr += columns.reduce(
          (sqlSegment, columnName, index, arr) =>
            `${sqlSegment} ${
              typeof item[columnName] !== "number"
                ? `'${item[columnName]}'`
                : item[columnName]
            } ${index + 1 === arr.length ? ");" : ","}`,
          " VALUES ("
        );
        return sqlStr;
      });

      executeMultipleQueries(queries, [], resolve, reject);
    } catch (error) {
      reject(error);
      console.error(error);
    }
  });
};

const dropTable = (tableName) => {
  return new Promise((resolve, reject) => {
    try {
      const query = "DROP TABLE IF EXISTS " + tableName;
      this.executeQuery(query, [], resolve, reject);
    } catch (error) {
      reject(error);
      console.error(error);
    }
  });
};

module.exports = {
  createTable,
  insert,
  dropTable,
};
