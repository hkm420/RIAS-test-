module.exports.config = {
	name:"anividv2",
	version: "2",
	hasPermssion: 0,
	credits: "Kirito", //call of duty noob
	description: "Random anime video version 2",
	commandCategory: "anime",
	cooldowns: 5
};
module.exports.run = async ({ api, event,}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	
  api.sendMessage(`⏱️ | video is sending please wait...`, event.threadID, event.messageID);
axios.get('https://jhunapi.mrbaylon4.repl.co/snauzk/?apikey=Marjhunapi').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `here is your anime video👾`,
						attachment: fs.createReadStream(__dirname + `/cache/codm.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/codm.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/codm.${ext}`)).on("close", callback);
			}) .catch(err => {
                     api.sendMessage("[ CODM ]\nApi error status: 200\nContact the owner to fix immediately", event.threadID, event.messageID);
    api.setMessageReaction("❌", event.messageID, (err) => {}, true);
                  })     
}
          