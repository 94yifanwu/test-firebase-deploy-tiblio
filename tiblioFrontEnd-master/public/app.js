/**
 * File: 	tiblioFrontEnd/app.js
 * Author:	Tiblio Electron App Project Team
 *			
 * Description: Entry point of desktop client application. Uses electron to
 *	load html/css/js files and render a desktop UI.
 *
 * References:
 * 	electron - https://www.electronjs.org/docs/tutorial/quick-start
 */

/* [---Package and constants---] */
/* Electron components */
const {app, BrowserWindow } = require('electron');
const path = require('path')



/* [---Front end---] */

function createWindow(){
	const win = new BrowserWindow({
		width: 900, height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});
	
	//win.loadFile('src/index.html');
	//win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
	win.loadURL(`file://${path.join(__dirname, 'index.html')}`)

}

/* Launches app */
app.whenReady().then(createWindow)
app.on('active', ()=>{
	if(BrowserWindow.getAllWindows().length === 0){
		createWindow();
	}
});


/* Quits app */
app.on('window-all-closed', ()=>{
	app.quit();
});


