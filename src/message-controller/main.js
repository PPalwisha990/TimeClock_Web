const { ipcMain } = require("electron");
const { onRefresh } = require("../db/database");
const { getAllEmployees } = require("../db/employeesTable");

ipcMain.handle("test-invoke", (event, args) => {
  return args;
});

ipcMain.on("create-databse-tables", async (event, arg) => {
  await onRefresh(arg);
  let response = await getAllEmployees();
  event.sender.send("get-EmployeeAll", response);
});

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  if (arg === "ping") event.reply("asynchronous-reply", "pong!");
  else event.reply("asynchronous-reply", "please, send me ping.");
});
