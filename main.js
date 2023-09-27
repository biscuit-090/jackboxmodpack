const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const logStream = fs.createWriteStream(path.join(__dirname, 'flask_server.log'), { flags: 'a' });

let mainWindow;

setTimeout(() => {
  const flaskProcess = exec('python server/app.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Flask exec error: ${error}`);
      return;
    }
    console.log(`Flask server stdout: ${stdout}`);
    console.error(`Flask server stderr: ${stderr}`);
    flaskProcess.stdout.pipe(logStream);
    flaskProcess.stderr.pipe(logStream);
  });
  flaskProcess.stdout.on('data', function(data) {
    console.log('Flask stdout: ' + data.toString());
  });
  flaskProcess.stderr.on('data', function(data) {
    console.log('Flask stderr: ' + data.toString());
  });
}, 2000)

setTimeout(() => {
  const nodeProcess = exec('npm run react-start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Node exec error: ${error}`);
      return;
    }
    console.log(`Node server stdout: ${stdout}`);
    console.error(`Node server stderr: ${stderr}`);
  });
}, 3000)

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    minWidth: 1200,
    minHeight: 1000,
    maxWidth: 1200,
    maxHeight: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
    title: 'The Jackbox Mod Pack',
    icon: path.join(__dirname, 'jackboxlogodevlight.ico')
  });

  mainWindow.loadURL('http://localhost:3000/');
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  setTimeout(createWindow, 5000); // Increased timeout to give both servers time to start.
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('will-quit', () => {
  flaskProcess.kill();
  nodeProcess.kill();
});
