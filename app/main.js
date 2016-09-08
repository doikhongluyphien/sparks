const {app, BrowserWindow, Menu} = require('electron');
const template = require('./main/menu/template');
const fs = require('fs');
const path = require('path');

// Global window object
let window;

function createWindow () {
	const windowDefaults = {
		width: 960,
		height: 640,
		minWidth: 640,
		minHeight: 420,
		icon: path.join(__dirname, '..', 'build', 'icons', '256x256.png')
	};
	window = new BrowserWindow(windowDefaults);
	window.loadURL(`file://${__dirname}/index.html`);

	window.userConfig = fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8');

	window.on('closed', () => {
		window = null;
	});

	if (process.env.NODE_ENV === 'development') {
		window.openDevTools();
	}
}

app.on('ready', createWindow);

// Set app's menu
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// For macOS
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (window === null) {
		createWindow();
	}
});