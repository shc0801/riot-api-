const {app, BrowserWindow, ipcMain} = require("electron");

const option = {
    width:1200,
    height:600,
    resizeble: false,
    webPreferences:{
        nodeIntegration: true,
        nativeWindowOpen: true,
    }
};

let win = null;

app.on("ready", ()=>{
    win = new BrowserWindow(option);
    win.removeMenu();
    win.loadFile("index.html");
    
    win.webContents.openDevTools();
})

ipcMain.on("openDev", ()=>{
    win.webContents.openDevTools();
})

ipcMain.on("summoner", (e, data)=>{
     console.log(data);
});