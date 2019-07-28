const { BrowserWindow, app, Menu } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// set env
process.env.NODE_ENV = 'development';


let win;
let splash;
let about;

const defaultOptions = {
    width: 1024,
    height: 744,
    minHeight: 700,
    minWidth: 900,
    title: "RV Todo's"
}

const childWinOptions = {
    width: 824,
    height: 544,
    minHeight: 500,
    minWidth: 700
}

const menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "About",
                click: () => aboutPage()
            },
            {
                label: "Quit",
                role: "quit"
            }
        ]
    }

];

app.on("ready", () => {
    // splash screen window
    splash = new BrowserWindow({ ...defaultOptions, backgroundColor: "#222", frame: false });
    splash.loadURL(
        isDev
            ?
            `file://${path.join(__dirname, "./splash-screen.html")}`
            :
            `file://${path.join(__dirname, "../build/splash-screen.html")}`
    );

    // creating a browser window on app load without screen enabled
    win = new BrowserWindow({ ...defaultOptions, show: false });

    // opening the dev tools on dev mode
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
    }

    const customMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(customMenu);

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

function aboutPage() {
    // creating About menu
    about = new BrowserWindow({ ...childWinOptions, title: "About", show: false });
    about.loadURL(
        isDev
            ?
            `file://${path.join(__dirname, "./about.html")}`
            :
            `file://${path.join(__dirname, "../build/about.html")}`
    );
    about.on("ready-to-show", () => {
        about.show();
    });
}