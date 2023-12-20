module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Kirito",
	description: "Restart Bot",
	commandCategory: "admin",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`Baby can you wait for a moment? I need to use the bathroom 😫 I'll be back in a few seconds`, threadID, () => process.exit(1));
}