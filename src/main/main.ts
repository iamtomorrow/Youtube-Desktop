import { app, BrowserWindow } from "electron";
import * as path from "path";

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

let mainWindow: BrowserWindow | null;

const createWindow = ( ) => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadFile( path.join(__dirname, "../index.html"));

    mainWindow.on("closed", ( ) => {
        mainWindow = null;
    })
}

app.on("ready", createWindow);

app.on("window-all-closed", ( ) => {
    if ( process.platform !== "darwin" ) {
        app.quit( );
    }
});

app.on("activate", ( ) => {
    if (mainWindow === null) {
        createWindow( );
    }
});