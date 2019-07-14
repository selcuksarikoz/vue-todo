
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let url;

if (process.env.NODE_ENV === 'DEV') {
	url = 'http://localhost:8080/';
} else {
	url = `file://${process.cwd()}/dist/index.html`;
}

app.on('ready', () => {
	let window = new BrowserWindow({
		width: 450,
		height: 800,
		transparent: true,
		frame: false,
		resizable: false,
		webPreferences: {
			nodeIntegrationInWorker: true,
			nodeIntegration: false
			// devTools: false
		}
	});
	window.on('closed', () => {
		window = null;
	});

	setTimeout(() => {
		window.loadURL(url);
	}, 1000);
});

// app.quit('quit', () => {
// 	app.quit();
// });
