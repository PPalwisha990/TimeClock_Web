const { createTable, dropTable } = require("./EmployeesTable");

const createDatabaseTables = async () => {
  await createTable();
};

const dropAll = async () => {
  await dropTable();
};

const onRefresh = async () => {
  //Drop All Tables
  await dropAll();

  //Create Tables Again
  await createDatabaseTables();
};

module.exports = { onRefresh };
