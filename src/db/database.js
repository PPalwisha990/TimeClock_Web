const { createTable, dropTable, insert } = require("./EmployeesTable");

const createDatabaseTables = async () => {
  await createTable();
};

const dropAll = async () => {
  await dropTable();
};

const onRefresh = async (data) => {
  console.log("Data is ==", data);
  //Drop All Tables
  await dropAll();

  //Create Tables Again
  await createDatabaseTables();

  //insert data in table
  await insert(data);
};

module.exports = { onRefresh };
