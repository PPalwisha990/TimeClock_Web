const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const isDev = require("electron-is-dev");
const { log } = require("../commons/Common");

// Initializing a new database

const openDatabase = () => {
  const db = new sqlite3.Database(
    isDev
      ? path.join(__dirname, "../db/time-clock.sqlite3") // my root folder if in dev mode
      : path.join(process.resourcesPath, "db/time-clock.sqlite3"), // the resources path if in production build
    (err) => {
      if (err) {
        log(`Database Error: ${err}`);
      } else {
        log("Database Loaded");
      }
    }
  );
  return db;
};
const successCB = () => {
  log("SQL executed ...");
};

const errorCB = (err) => {
  log("error: ", err);
  return false;
};

const addAllEmployees = (txn, i, employees, onComplete) => {
  if (employees.length > 0) {
    let data = employees[i];
    log("Adding All Employees: ", data);
    txn.executeSql(
      "INSERT INTO  Employees_All (EmployeeId, EmployeeName, UserName, MobileNumber, OfficeNumber, EmailAddress, EmployeeDesignationId, DepartmentId, StationId, ReportsTo, ReportsToIndirect, Gender, EmployeeStatus, JoiningDate, Photo, WorkShiftId) VALUES (:EmployeeId, :EmployeeName, :UserName, :MobileNumber, :OfficeNumber, :EmailAddress, :EmployeeDesignationId, :DepartmentId, :StationId, :ReportsTo, :ReportsToIndirect, :Gender, :EmployeeStatus, :JoiningDate, :Photo, :WorkShiftId)",
      [
        data[0],
        data[1],
        data[3],
        data[22],
        data[23],
        data[6],
        data[7],
        data[8],
        data[9],
        data[10],
        data[11],
        data[12],
        data[24],
        data[13],
        data[14],
        data[18],
      ],
      () => {
        i++;
        if (i < employees.length) {
          addAllEmployees(txn, i, employees, onComplete);
        } else {
          onComplete();
        }
      },
      () => {
        i++;
        if (i < employees.length) {
          addAllEmployees(txn, i, employees, onComplete);
        } else {
          onComplete();
        }
      }
    );
  } else {
    onComplete();
  }
};

const createAllEmployeesTable = (db, data) => {
  return new Promise((resolve, reject) => {
    try {
      db.transaction(function (txn) {
        txn.executeSql("DROP TABLE IF EXISTS Employees_All", []);
        txn.executeSql(
          "CREATE TABLE IF NOT EXISTS Employees_All( " +
            " EmployeeId INTEGER PRIMARY KEY NOT NULL, EmployeeName VARCHAR(255), UserName VARCHAR(255), MobileNumber VARCHAR(255), OfficeNumber VARCHAR(255), EmailAddress VARCHAR(100), EmployeeDesignationId INTEGER, DepartmentId INTEGER, StationId INTEGER, ReportsTo INTEGER, ReportsToIndirect INTEGER, Gender INTEGER, EmployeeStatus INTEGER,  JoiningDate DATE, Photo VARCHAR(255), WorkShiftId VARCHAR(255));",
          [],
          successCB,
          errorCB
        );
        addAllEmployees(txn, 0, data, () => {
          resolve();
        });
      });
    } catch (error) {
      log("Error: ", error);
      reject(error);
    }
  });
};

const createTables = (data) => {
  let db = openDatabase();
  let savedAllEmployees = createAllEmployeesTable(db, data);

  return Promise.all([savedAllEmployees]);
};
const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    try {
      const db = openDatabase();
      db.transaction((txn) => {
        txn.executeSql("SELECT * FROM Employees_All", [], (tx, res) => {
          if (res.rows.length > 0) {
            resolve(res.rows._array);
          } else {
            resolve([]);
          }
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { createTables, getAllEmployees };
