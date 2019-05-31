const electron = require('electron');
const url = require('url');
const path = require('path');

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
    mainWindow.loadURL(myURL);
});
