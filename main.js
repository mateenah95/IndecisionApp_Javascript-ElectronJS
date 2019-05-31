const electron = require('electron');
const url = require('url');
const path = require('path');

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Exit',
                click(){
                    electron.app.exit()
                }
            }
        ]
    }
];  

electron.app.on('ready', function (){
    //Create A New WIndow
    mainWindow = new electron.BrowserWindow({
        width: 800, 
        height: 1200,
        resizable: false,
        center: true,
        icon: __dirname + '/icons/main-icon.png'
    });

    //Declare & Assign URL For HTML File
    let myURL = url.format({
        pathname: path.join(__dirname, 'welcome.html'),
        protocol: 'file:',
        slashes: true
    });
    //Load HTML Into Window
    mainWindow.loadURL('http://mateenah95.pythonanywhere.com');

    const mainMenu = electron.Menu.buildFromTemplate(mainMenuTemplate);

    electron.Menu.setApplicationMenu(mainMenu);
});
