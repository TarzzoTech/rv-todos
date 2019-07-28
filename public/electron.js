const { BrowserWindow, app } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// set env
process.env.NODE_ENV = 'development';

const defaultOptions = {
    width: 1024,
    height: 744,
    minHeight: 700,
    minWidth: 900,
    title: "RV Todo's",
    frame: false
}

let win;
let splash;

app.on("ready", () => {
    // splash screen window
    splash = new BrowserWindow({ ...defaultOptions, backgroundColor: "#222" });
    splash.loadURL(
        isDev
            ?
            `file://${path.join(__dirname, "./splash-screen.html")}`
            :
            `file://${path.join(__dirname, "../build/index.html")}`
    );

    // creating a browser window on app load without screen enabled
    win = new BrowserWindow({ ...defaultOptions, show: false, frame: true });

    // opening the dev tools on dev mode
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
    }

    // showing the application window after DOM ready
    win.once("ready-to-show", () => {
        setTimeout(() => {
            splash.destroy();
            win.show();
        }, 2000);
    });

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
