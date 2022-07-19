const DATABASE_NAME = "TimeClock.db";
const DATABASE_VERSION = 1.0;

var openDatabase = require("websql");
const { log } = require("../commons/Common");
const db = openDatabase(DATABASE_NAME, DATABASE_VERSION, "", 1);

const successCB = () => {
  log("SQL executed ...");
};

const errorCB = (err) => {
  log("error: ", err);
  return false;
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

export const createTables = (data, schedulesList) => {
  let savedAllEmployees = createAllEmployeesTable(
    db,
    data?.WebHRData?.Employees_All
  );
  // let savedEmployees = createEmployeesTable(db, data?.WebHRData?.Employees);
  // let savedCompanies = createCompaniesTable(db, data?.WebHRData?.Companies);
  // let savedDepartments = createDepartmentsTable(
  //   db,
  //   data?.WebHRData?.Departments,
  // );
  // let savedDesignations = createDesignationsTable(
  //   db,
  //   data?.WebHRData?.Designations,
  // );
  // let savedStations = createStationsTable(db, data?.WebHRData?.Stations);
  // let savedAttendanceLogs = createAttendanceLogTable(db);
  // let savedProjects = createProjectsTable(db, data?.AttendanceProjects);
  // let savedKioskAttendance = createKioskAttendanceTable(db);
  // let savedSchedules = createSchedulesTable(db, schedulesList);
  // let savedkAttendance = createTableKioskAttendance(db);

  // let savedAttendanceImages = createTableAttendanceImages(db);
  // let savedFaces = createFacesTable(db);

  return Promise.all([
    savedAllEmployees,
    //   savedEmployees,
    //   savedCompanies,
    //   savedDepartments,
    //   savedDesignations,
    //   savedStations,
    //   savedAttendanceLogs,
    //   savedProjects,
    //   savedKioskAttendance,
    //   savedSchedules,
    //   savedkAttendance,
    //   savedAttendanceImages,
    //   savedFaces,
  ]);
};
