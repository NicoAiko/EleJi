const { app, BrowserWindow } = require('electron');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    minHeight: 320,
    minWidth: 320,
    title: 'EleJi',
    titleBarStyle: 'hidden',
    show: false,
    webPreferences: {
      devTools: true,
    },
  });

  mainWindow.loadURL('http://localhost:8080');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
  mainWindow.show();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
    mainWindow.show();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
