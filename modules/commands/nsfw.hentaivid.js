module.exports.config = {
  name: "hentaivid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kirito",
  description: "random hentai video",
  commandCategory: "nsfw",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://rishadsapi.apis100.repl.co/nsfw/hentaivid`);
    let a = `${res.data.result.video_1}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp4", Buffer.from(imgs1, "utf-8"));

    var josh = [];
    josh.push(fs.createReadStream(__dirname + "/cache/img1.mp4"));
    return api.sendMessage({attachment: josh
    }, event.threadID);
}