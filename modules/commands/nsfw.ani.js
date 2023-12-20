module.exports.config = {
  name: "ani",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Kirito",
  description: "Get a random NSFW Image",
  usage: "[category]",
  commandCategory: "nsfw",
  cooldowns: 10
};

module.exports.run = async ({ api, event, args }) => {
  const axios = global.nodemodule["axios"];

  if (args.length === 0) {
    api.sendMessage('Please provide a category.\nAvailable categories:\n waifu, neko, trap, blowjob ', event.threadID, event.messageID);
    return;
  }

  const category = args[0].toLowerCase();
  const Categories = ['waifu', 'neko', 'trap', 'blowjob'];
  if (!Categories.includes(category)) {
    api.sendMessage('Invalid category.', event.threadID, event.messageID);
    return;
  }

  try {
    const response = await axios.get(`https://api.waifu.pics/nsfw/${category}`);
    const imgUrl = response.data.url;
    const imgResponse = await axios.get(imgUrl, { responseType: 'stream' });

    api.sendMessage({ attachment: imgResponse.data }, event.threadID, event.messageID);
  } catch (error) {
    console.error('Something went wrong:', error);
    api.sendMessage('An error occurred. Please try again.', event.threadID, event.messageID);
  }
};
