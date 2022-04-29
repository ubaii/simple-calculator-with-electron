const {app, BrowserWindow} = require('electron')
const path = require('path');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']=true

function createWindow () {
    const mainWindow = new BrowserWindow({
      width: 322,
      height: 510,
      transparent: true,
      frame: false,
      resizable:false,
      fullscreenable:false,
      webPreferences: {
        contextIsolation: true, 
        preload: path.join(__dirname, 'preload.js')
      }
    })
    mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
        console.log(message + " " +sourceId+" ("+line+")");
    });  
    mainWindow.loadFile('./package/index.html')
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})