const axios = require("axios");

module.exports.config = {
name: "rias2",
version: "1",
hasPermission: 0,
credits: "Kirito",
description: "Talk to Rias in Banglish and বাংলা",
usages: "[text]",
commandCategory: "ai",
cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
try {
let message = args.join(" ");
if (!message) {
return api.sendMessage(`Yes my love...`, event.threadID, event.messageID);
}

const response = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${message}&filter=false`);
const respond = response.data.message;
api.sendMessage(respond, event.threadID, event.messageID);
} catch (error) {
console.error("Rias ektu washroom e giyeche ese reply dicche", error);
api.sendMessage("Yes babe...", event.threadID, event.messageID);
}
};