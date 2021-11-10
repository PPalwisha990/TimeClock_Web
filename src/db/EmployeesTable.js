const sqliteHelper = require("./sqlitehelper");

const TABLE_NAME = "Employees";
const COLUMNS = {
  EMPLOYEE_ID: "EmployeeId",
  EMPLOYEE_NAME: "EmployeeName",
  USERNAME: "UserName",
  MOBILE_NUMBER: "MobileNumber",
  OFFICE_NUMBER: "OfficeNumber",
  EMAIL_ADDRESS: "EmailAddress",
  EMPLOYEE_DESIGNATION_ID: "EmployeeDesignationId",
  DEPARTMENT_ID: "DepartmentId",
  STATION_ID: "StationId",
  COMPANY_ID: "CompanyId",
  REPORTS_TO: "ReportsTo",
  ACCESS_CODE: "AccessCode",
  IOS_ID: "iOSId",
  ANDROID_ID: "AndroidId",
  EMPLOYEE_STATUS: "EmployeeStatus",
  PHOTO: "Photo",
  REPORTS_TO_ROLE: "ReportsToRole",
  WORK_SHIFT_ID: "WorkshiftId",
};

const createTable = async () => {
  return sqliteHelper.createTable(TABLE_NAME, [
    {
      columnName: COLUMNS.EMPLOYEE_ID,
      dataType: "INTEGER NOT NULL PRIMARY KEY",
    },
    {
      columnName: COLUMNS.EMPLOYEE_NAME,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.USERNAME,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.MOBILE_NUMBER,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.OFFICE_NUMBER,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.EMAIL_ADDRESS,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.EMPLOYEE_DESIGNATION_ID,
      dataType: "INTEGER",
    },
    {
      columnName: COLUMNS.DEPARTMENT_ID,
      dataType: "INTEGER",
    },
    {
      columnName: COLUMNS.STATION_ID,
      dataType: "INTEGER",
    },
    {
      columnName: COLUMNS.COMPANY_ID,
      dataType: "INTEGER",
    },
    {
      columnName: COLUMNS.REPORTS_TO,
      dataType: "INTEGER",
    },
    {
      columnName: COLUMNS.ACCESS_CODE,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.IOS_ID,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.ANDROID_ID,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.EMPLOYEE_STATUS,
      dataType: "INTEGER",
    },
    {
      columnName: COLUMNS.PHOTO,
      dataType: "TEXT",
    },
    {
      columnName: COLUMNS.REPORTS_TO_ROLE,
      dataType: "INTEGER",
    },
    {
      columnName: COLUMNS.WORK_SHIFT_ID,
      dataType: "INTEGER",
    },
  ]);
};

const dropTable = async () => {
  return sqliteHelper.dropTable(TABLE_NAME);
};

const insert = async (items) => {
  let data = [];
  items.map((item, ind) => {
    console.log("Item===", item, "== index", ind);
    let obj = {};
    obj[COLUMNS.EMPLOYEE_ID] = item[0];
    obj[COLUMNS.EMPLOYEE_NAME] = item[1];
    obj[COLUMNS.USERNAME] = item[2];
    obj[COLUMNS.MOBILE_NUMBER] = item[3];
    obj[COLUMNS.OFFICE_NUMBER] = item[4];
    obj[COLUMNS.EMAIL_ADDRESS] = item[5];
    obj[COLUMNS.EMPLOYEE_DESIGNATION_ID] = item[6];
    obj[COLUMNS.DEPARTMENT_ID] = item[7];
    obj[COLUMNS.STATION_ID] = item[8];
    obj[COLUMNS.COMPANY_ID] = item[9];
    obj[COLUMNS.REPORTS_TO] = item[10];
    obj[COLUMNS.ACCESS_CODE] = item[19];
    obj[COLUMNS.IOS_ID] = item[20];
    obj[COLUMNS.ANDROID_ID] = item[21];
    obj[COLUMNS.EMPLOYEE_STATUS] = item[24];
    obj[COLUMNS.PHOTO] = item[14];
    obj[COLUMNS.REPORTS_TO_ROLE] = item[27];

    data.push(obj);
  });

  return sqliteHelper.insert(TABLE_NAME, data);
};

module.exports = { insert, createTable, dropTable };
