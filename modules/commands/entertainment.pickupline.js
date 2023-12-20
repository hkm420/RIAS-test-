module.exports.config = {
	name: "pickupline",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Kirito",
	description: "random pickuplines for ppl",
	commandCategory: "entertainment",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/pickuplines`);
  var morse = res.data.pickupline;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}