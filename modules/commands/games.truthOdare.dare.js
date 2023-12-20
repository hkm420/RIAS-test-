const axios = require('axios');

module.exports.config = {
  name: "dare",
  version: "1.0",
  hasPermission: 0,
  credits: "Kirito",
  usePrefix: true,
  description: "Get a random dare.",
  commandCategory: "games",
  cooldowns: 0,
};

module.exports.run = async ({ api, event }) => {
  try {
    const response = await axios.get('https://sensui-useless-apis.codersensui.repl.co/api/fun/dare');
    const dare = response.data.question;
    const banglaTranslation = response.data.banglaTranslation;

    api.sendMessage(`Dare:\n\n${dare}`, event.threadID);
  } catch (error) {
    console.error('Error fetching dare:', error);
    api.sendMessage("Unable to fetch dare at the moment.", event.threadID);
  }
};