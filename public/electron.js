const { BrowserWindow, app } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// set env
process.env.NODE_ENV = 'development';

let win;

app.on("ready", () => {

    // creating a browser window on app load
    win = new BrowserWindow({ width: 1024, height: 744, minHeight: 700, minWidth: 900, title: "RV Todo's" });

    // opening the dev tools on dev mode
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
    }

    // loading our html file
    win.loadURL(
        isDev
        ?
        "http://localhost:3000"
        :
        `file://${path.join(__dirname, "../build/index.html")}`
    );

    // removing the window reference on window close
    win.on("closed", () => {
        win = null;
    });

    // closing the window for MacOS
    app.on("window-all-closed", () => {
        if (process.platform === "darwin") {
            app.quit();
        }
    });
});
