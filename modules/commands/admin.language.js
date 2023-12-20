module.exports.config = {
	name: "language",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Kirito",
	description: "Change BOT language",
	commandCategory: "Admin",
	usages: "[bn] [en]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;

    switch (args[0]) {
        case "bangla":
        case "bn":
            {
                return api.sendMessage(`ভাষাটি ভিয়েতনামিতে পরিবর্তিত হয়েছে`, threadID, () => global.config.language = "bn"); 
            }
            break;
        
        case "english":
        case "en":
            {
                return api.sendMessage(`Language has been converted to English`, threadID, () => global.config.language = "en"); 
            }
            break;
    
        default:
            {
                return api.sendMessage("Syntax error, use : language [bn / en]", threadID, messageID);
            }   
            break; 
            
    }	
}