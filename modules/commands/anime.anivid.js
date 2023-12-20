module.exports.config = {
    name: "anivid",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "",
    commandCategory: "video",
  
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/_anime.mp4`")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/_anime.mp4`"),event.messageID);
	 return request(encodeURI(`https://caochungdat.me/docs/other/videoanime`)).pipe(fs.createWriteStream(__dirname+'/cache/_anime.mp4`')).on('close',() => callback());  
      } 
    }
                                                    