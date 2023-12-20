module.exports.config = {
  name: "waifu",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Kirito",
  description: "Get a random SFW Image",
  usage: "[category]",
  commandCategory: "anime",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = global.nodemodule["axios"];

  if (args.length === 0) {
    api.sendMessage('Please provide a category.\n\nAvailable categories:\n waifu, neko, shinobu, megumin, bully, cuddle, cry, kiss, lick, hug, awoo, pat, smug, bonk, yeet, blush, smile, wave, highfive, handhold, nom, bite, glomp, slap, kill, kick, happy, wink, poke, dance, cringe ', event.threadID, event.messageID);
    return;
  }

  const category = args[0].toLowerCase();
  const Categories = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'kiss', 'lick', 'hug', 'awoo', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wink', 'poke', 'dance', 'cringe'];
  if (!Categories.includes(category)) {
    api.sendMessage('Invalid category.', event.threadID, event.messageID);
    return;
  }

  try {
    const response = await axios.get(`https://api.waifu.pics/sfw/${category}`);
    const imgUrl = response.data.url;
    const imgResponse = await axios.get(imgUrl, { responseType: 'stream' });

    api.sendMessage({ attachment: imgResponse.data }, event.threadID, event.messageID);
  } catch (error) {
    console.error('Something went wrong:', error);
    api.sendMessage('An error occurred. Please try again.', event.threadID, event.messageID);
  }
};
