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
    obj[COLUMNS.EMPLOYEE_ID] = item.employeeId;
    obj[COLUMNS.EMPLOYEE_NAME] = item.employeeName;
    obj[COLUMNS.USERNAME] = item.userName;
    obj[COLUMNS.MOBILE_NUMBER] = item.mobile;
    obj[COLUMNS.OFFICE_NUMBER] = item.office;
    obj[COLUMNS.EMAIL_ADDRESS] = item.email;
    obj[COLUMNS.EMPLOYEE_DESIGNATION_ID] = item.dId;
    obj[COLUMNS.DEPARTMENT_ID] = item.ddId;
    obj[COLUMNS.STATION_ID] = item.sId;
    obj[COLUMNS.COMPANY_ID] = item.cId;
    obj[COLUMNS.REPORTS_TO] = item.reportsTo;
    obj[COLUMNS.ACCESS_CODE] = item.accessCode;
    obj[COLUMNS.IOS_ID] = item.ios;
    obj[COLUMNS.ANDROID_ID] = item.android;
    obj[COLUMNS.EMPLOYEE_STATUS] = item.status;
    obj[COLUMNS.PHOTO] = item.photo;
    obj[COLUMNS.REPORTS_TO_ROLE] = item.reportsToRole;
    obj[COLUMNS.WORK_SHIFT_ID] = item.wId;

    data.push(obj);
  });

  return sqliteHelper.insert(TABLE_NAME, data);
};

const getAllEmployees = async () => {
  return sqliteHelper.select(
    TABLE_NAME,
    "*",
    null,
    null,
    null,
    COLUMNS.EMPLOYEE_NAME + " COLLATE NOCASE"
  );
};

module.exports = { insert, createTable, dropTable, getAllEmployees };
