module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "kirito",
  description: "Bot will rep tag admin or rep tagbot ",
  commandCategory: "admin",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100092722244702","100041138332501") {
    var aid = ["100092722244702", "100041138332501"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Don't tag admin, he's busy 😗", "Admin is currently unavailable 🤧", "Sorry, admin is offline 😪","Do you like my admin thats why your tagging him? 😏"," If you tag my admin one more time, i will punch you 🙂"];
      api.setMessageReaction("🤭", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}