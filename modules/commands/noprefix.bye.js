module.exports.config = {
	name: "bye",
     	version: "1.0.1",
	hasPermssion: 0,
	credits: "Kirito", 
	description: "No prefix",
	commandCategory: "no prefix",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tata")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
		var msg = {
				body: "take your time."
			}
			api.sendMessage(msg, threadID, messageID);
setTimeout(() => {
api.sendMessage({sticker: "162332973951561"}, threadID, messageID)
}, 3)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}