'use strict';

const ipc = require('electron').ipcMain;



module.exports = (win) => {
	let notifier = null
	switch(process.platform) {
		case 'darwin': {
			notifier = require('./notifications/macos');
			break;
		}
		default: {
			notifier = require('./notifications/win/index');
		}
	}
	notifier.configure(win);
	ipc.on('api:emitter:track', (e, track) => {
		notifier.show(track);
	});
};
