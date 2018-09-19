const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 330, height: 134})
	win.setAlwaysOnTop(true, 'modal-panel');
  
    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }
  
  app.on('ready', createWindow)
