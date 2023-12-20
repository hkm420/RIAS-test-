
const axios = require('axios');

module.exports.config = {
  name: "redroom",
  version: "1.0",
  hasPermission: 0,
  credits: "Kirito",
  description: "( redroom sex video without prefix)",
  usages: "",
  commandCategory: "nsfw",
  cooldowns: 2,
};

module.exports.handleEvent = async function ({ api, event }) {
  try {
    if (!(event.body.indexOf("redroom") === 0 || event.body.indexOf("Redroom") === 0)) return;

    const API_SERVER_URL = 'https://hazeyy-redroom-beta-test-api.kyrinwu.repl.co/api/videosex.php';

    api.sendMessage("🕣 | 𝘚𝘦𝘯𝘥𝘪𝘯𝘨 𝘷𝘪𝘥𝘦𝘰...", event.threadID);

    const response = await axios.get(API_SERVER_URL);
    const responseData = response.data;

    const videoUrl = responseData.data;

    const videoStreamResponse = await axios.get(videoUrl, { responseType: 'stream' });

    const message = {
      attachment: videoStreamResponse.data,
    };

    await api.sendMessage(message, event.threadID);
  } catch (error) {
    console.error('😿 Error fetching or sending the video', error);
    api.sendMessage("😿 Error sending video", event.threadID, event.messageID);
  }
};

module.exports.run = async function ({ api, event }) {
  
};