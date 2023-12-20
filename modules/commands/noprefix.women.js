const fs = require("fs");
module.exports.config = {
	name: "womenhahaha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Kirito", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("brainless")==0 || (event.body.indexOf("Brainless")==0 || (event.body.indexOf("women")==0 || (event.body.indexOf("Women")==0 || (event.body.indexOf("Woman")==0 || (event.body.indexOf("Woman")==0))))))) {
		var msg = {
				body: "☕☕☕",
				attachment: fs.createReadStream(__dirname + `/noprefix/women.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
