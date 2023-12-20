module.exports.config = {
	name: "walaikumassalam",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "Kirito", 
	description: "reply to salam",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("good morning")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("good Morning")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("morning")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("magandang umaga")==0 || event.body.indexOf("Magandang umaga")==0 || event.body.indexOf("magandang Umaga")==0 || event.body.indexOf("Magandang Umaga")==0 ) { 
		var msg = {
				body: `Good Morning ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
