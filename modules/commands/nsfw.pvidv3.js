module.exports.config = {
  name: "pvidv3",
  version: "3",
  hasPermssion: 0,
  credits: "Kirito",
  description: "Corn videos you shouldn't use this command when there's too many people. I prefer to use it when youre alone",
  commandCategory: "nsfw",
  usages: "",
  cooldowns: 10,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  api.sendMessage(`⏱️ | video is sending please wait...`, event.threadID, event.messageID);
  var red = ["https://porn-1.api-johnlester.repl.co"]
  var redroom = red[Math.floor(Math.random() * red.length)]
  axios.get(redroom).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/data/kanna.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/data/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/kanna.${ext}`)).on("close", callback);
      })
}
