const { ipcMain } = require("electron");
const { onRefresh } = require("../db/database");

ipcMain.handle("test-invoke", (event, args) => {
  return args;
});

ipcMain.on("create-databse-tables", async (event, arg) => {
  let response = onRefresh();
  return response;
});

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  if (arg === "ping") event.reply("asynchronous-reply", "pong!");
  else event.reply("asynchronous-reply", "please, send me ping.");
});
