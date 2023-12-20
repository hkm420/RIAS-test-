module.exports.config = {
  name: "fbvidv2",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Kirito",
  description: "Fb Vid Downloader",
  commandCategory: "media downloader",
  usages: "fb video link",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");
  
  if (!args[0]) {
    api.sendMessage("please put a valid fb video link", event.threadID, event.messageID);
    return;
  }
  
  api.sendMessage("downloading video, please wait...", event.threadID, event.messageID);
  
  try {
    let path = __dirname + `/cache/fbVID.mp4`;
  
    const aa = await axios.get(`https://api.samirthakuri.repl.co/api/videofb?url=${encodeURI(link)}`);
    
    const vid = (await axios.get(aa.data.video, { responseType: "arraybuffer", })).data;
    
    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    
    api.sendMessage({
      body: `downloaded`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    
  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
  
};