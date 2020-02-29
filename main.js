// >>> main.js
//-------------------------------------------------
// > Imports
const {app, BrowserWindow} = require('electron')
const path = require('path')
//-------------------------------------------------
// > Consts
const OPTIONS = { width: 640, height: 480 };
const DEBUG = false;

//#################################################
// > Create window to display
var createWindow = ()=>{
    const win = new BrowserWindow(OPTIONS);
    win.loadFile('index.html');
  
    if(DEBUG){
        win.webContents.openDevTools();
    }
}

// > Handle window-all-closed event
var quitApp = ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
}

// > Handle activate event
var activateApp = ()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
}

//#################################################
// > EVENT: When electron is ready to start
app.on('ready', createWindow);

// > EVENT: Quit if all windows are closed
app.on('window-all-closed', quitApp);

// > EVENT: If app is activated
app.on('activate', activateApp);