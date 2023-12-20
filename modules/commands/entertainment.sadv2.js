const axios = require('axios');

module.exports.config = {
  name: "Sadv2",
  version: "1.0.",
  hasPermission: 2,
  credits: "Kirito",
  usePrefix: true,
  description: "GENERATE SAD QUOTES",
 usePrefix: true, 
  commandCategory: "entertainment",
  cooldowns: 2,
};

const SAD_QUOTES_API = 'https://api-1.chatbotmesss.repl.co/api/sadquotes1';

module.exports.run = async ({ api, event }) => {
  try {
    const response = await axios.get(SAD_QUOTES_API);
    const { quote, author } = response.data;

    // Build the final quote message
    const message = `${quote} - ${author}`;

    // Send the quote as a message
    api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage("Error fetching quotes.", event.threadID, event.messageID);
  }
};