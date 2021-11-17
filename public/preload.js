/****
 * contextBridge: creating a bridge between React and Electron
 * ipcRenderer: send signals to ipcMain in electron.js
 * keys should be unique passing to the events
 ****/

/* 
Invoke — You send data from the frontend, process it with ipcMain.handle on the backend and return information to the frontend.
send — You send data from the frontend, process it in the backend with ipcMain.on and send back a reply when it is processed.
on — You receive data from the backend event.sender and process that with the help of a callback function.
*/

const { ipcRenderer, contextBridge } = require("electron");

const getDataFromDb = (callback) => {
  ipcRenderer.send("employeesAll", "");
  ipcRenderer.on("get-EmployeeAll", (event, data) => {
    callback(data);
  });
};

contextBridge.exposeInMainWorld("api", {
  // Invoke Methods

  testInvoke: (args) => ipcRenderer.invoke("test-invoke", args),
  refreshTables: (args) => ipcRenderer.send("create-databse-tables", args),
  // Send Methods
  getEmployees: (args) => getDataFromDb(),
  // Receive Methods
  getEmployeesFromDatabase: (callback) =>
    ipcRenderer.on("get-EmployeeAll", (event, data) => {
      callback(data);
    }),
});
