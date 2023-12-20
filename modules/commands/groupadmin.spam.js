module.exports.config = {
name: "spam",
	version: "",
	hasPermssion: 1,
	credits: "",
	description: "",
	commandCategory: "group admin",
	usages: "",
	cooldowns: 200,
	dependencies: "",
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*spam
	
for (i = 0; i < 100; i++) {
  //for (i = 0; i < 200; i++) { (original one)
 k("☕");
}
	
	}
	