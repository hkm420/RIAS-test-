const axios = require("axios");
 
module.exports.config = { usePrefix: true,
    name: "teach",
    version: "1",
    hasPermission: 0,
    credits: "Kirito",
    description: "Teach Rias",
    usages: "[your question] > [Rias's answer]",
    commandCategory: "admin",
    cooldowns: 0
};
 
 
module.exports.run = async ({ api, event, args }) => {
    try {
    
 
        const text = args.join(" ");
        const text1 = text.substr(0, text.indexOf(" > "));
        const text2 = text.split(" > ").pop();
 
        if (!text1 || !text2) {
            return api.sendMessage(`Usage: ${global.config.PREFIX}teach hi > hello`, event.threadID, event.messageID);
        }
 
        const response = await axios.get(`https://api.rias2611.repl.co/api/teach?message=${encodeURIComponent(text1)}&respond=${encodeURIComponent(text2)}`);
        api.sendMessage(`Text has been added to Rias✅\n\nYour ask: ${text1}\nRias's reply: ${text2}`, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Emoji dile ami reply dei na❗", event.threadID, event.messageID);
    }
};
 