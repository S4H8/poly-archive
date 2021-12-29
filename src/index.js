const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain;
 
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

function createWindow() {
    const mainWindow = new BrowserWindow({
        minWidth: 725,
        minHeight: 810,
        width: 1280,
        height: 800,
        show: false,
        webPreferences: {
            preload: 'preload.js',
            contextIsolation: false
        }
    });

    const splash = new BrowserWindow({
        width: 230,
        height: 300,
        frame: false,
        alwaysOnTop: true,
        autoHideMenuBar: true
    });

    ipc.on('closeApp', () => {
        console.log('yesss');
        win.close()
    });

    splash.loadFile(path.join(__dirname, 'splash.html'));
    splash.loadURL(`file://${__dirname}/splash.html`);

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.once('ready-to-show', () => {
        splash.destroy();
        mainWindow.show();
    });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
