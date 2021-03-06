'use strict';

console.info('[Client:IPC:API] Receiver initing...', enviroment);
var ipc = require('electron').ipcRenderer;

var api = externalAPI;


/**
 * List of events functions
 * @type {Object}
 */
var events = {
	play: function() {
		// api.play();
		api.togglePause();
	},
	next: function() {
		api.next();
	},
	prev: function() {
		api.prev();
	}
};


_.each(events, function(event, key) {
	console.info('api:receiver:%s - mounted', key);
	ipc.on('api:receiver:' + key, event);
});

ipc.send('api:receiver:saveme');

