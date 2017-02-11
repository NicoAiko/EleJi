const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');
const path = require('path');
const url = require('url');
const storage = require('electron-json-storage');
const _ = require('lodash');
const appInfo = require('./appInfo');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let initWin;

function initializationWindow() {
  initWin = new BrowserWindow({
    width: 300,
    height: 300,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    frame: false,
    titleBarStyle: 'none',
    darkTheme: true
  });
  // and load the index.html of the app.
  initWin.loadURL(url.format({
    pathname: path.join(__dirname, 'initialization.html'),
    protocol: 'file:',
    slashes: true
  }));

  initWin.on('show', () => {
    createWindow();
  });

  storage.get('usersettings', function(error, data) {
    if(error) throw error;

    if(typeof _.get(data, 'language') === 'undefined') {
      storage.set('usersettings', { language: app.getLocale() }, function(error) {
        if(error) throw error;

        appInfo.Language = app.getLocale();
      });
    } else {
      appInfo.Language = _.get(data, 'language');
    }
  });

  appInfo.Version = app.getVersion();

  initWin.on('close', () => {
    initWin = null;
  });
}

function createWindow() {

  // Create the browser window.
  win = new BrowserWindow({
    width: 1100,
    height: 600,
    minWidth: 1100,
    minHeight: 600,
    useContentSize: true,
    title: 'EleJi',
    show: false,
  });

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  // win.webContents.openDevTools()

  win.on('ready-to-show', () => { initWin.close(); });

  win.webContents.on('did-finish-load', () => { win.show(); });

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// app.on('ready', createWindow);
app.on('ready', initializationWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on("translation-complete", (event, args) => {
  // This will show the sender's BrowserWindow
  BrowserWindow.fromWebContents(event.sender.webContents);
});