'use strict';
const electron = require('electron'); //this to import
const app = electron.app;
const path = require('path');
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        useContentSize: true,
        width: 800,
        height: 600,
        resizable: false,
        fullscreen: false,
        icon: path.join(__dirname, 'images/applogo.ico')
    });//changes to window goes here
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', () => { mainWindow = null; });
});
