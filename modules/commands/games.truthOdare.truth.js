const axios = require('axios');

module.exports.config = {
  name: "truth",
  version: "1.0",
  hasPermission: 0,
  credits: "Kirito",
  usePrefix: true,
  description: "Get a random truth question.",
  commandCategory: "games",
  cooldowns: 0,
};

module.exports.run = async ({ api, event }) => {
  try {
    const response = await axios.get('https://sensui-useless-apis.codersensui.repl.co/api/fun/truth');
    const truth = response.data.question;
    const tagalogTranslation = response.data.tagalogTranslation;

    api.sendMessage(`Truth:\n\n${truth}`, event.threadID);
  } catch (error) {
    console.error('Error fetching truth question:', error);
    api.sendMessage("Unable to fetch truth question at the moment.", event.threadID);
  }
};