const { app, BrowserWindow } = require('electron');
const path = require('path');

console.log(path.join(__dirname, "src", "html", "index.html"));

const createWindow = () => {
    const win = new BrowserWindow({
        title: "First App",
        width: 800,
        height: 600,
        // frame: false,
        // titleBarStyle: 'hidden',
        minWidth: 350,
        minHeight: 400,
        backgroundColor: "#37474f",
        webPreferences: {
            // devTools: false,
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile(path.join(__dirname, "src", "html", "index.html"))



}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})