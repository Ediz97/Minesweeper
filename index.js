const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({width: 1800, height: 1000, autoHideMenuBar: true});
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
});