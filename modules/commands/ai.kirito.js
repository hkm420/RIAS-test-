const axios = require("axios");
 
module.exports.config = { 
  usePrefix: true,
    name: "kirito",
    version: "1",
    hasPermission: 0,
    credits: "Kirito",
    description: "talk with kirito",
    usages: "[ask]",
    commandCategory: "ai",
    cooldowns: 0
};
 
module.exports.run = async ({ api, event, args }) => {
    try {
        let message = args.join(" ");
        if (!message) {
            return api.sendMessage(`Hey there I'm Kirito the developer of Rias Gremory. How my I help you?`, event.threadID, event.messageID);
        }
 
        const response = await axios.get(`https://simsimi.imtiaz18.repl.co/get?message=${message}`);
        const respond = response.data.response;
        api.sendMessage(respond, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
    }
}