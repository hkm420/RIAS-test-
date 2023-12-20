var cred = "Kirito";
module.exports.config = {
    name: "pfp",
    version: "1.0.0",
    hasPermision: 0,
    credits: `${cred}`,
    description: "get info using uid/mention/reply to a message",
    usages: "[reply/uid/@mention/url]",
    commandCategory: "info",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
      if ((this.config.credits) != `${cred}`) { return api.sendMessage(`ulol change credits pa `, event.threadID, event.messageID)}
      if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
      else var id = args[0] || event.senderID;
      if(event.type == "message_reply") { var id = event.messageReply.senderID }
      else if (args.join().indexOf(".com/") !== -1) {
        const res = await axios.get(``);
var id = res.data.result
}
	const res = await api.getUserInfoV2(parseInt(id)); 
    //const image = (await axios.get(`https://api-saikidesu-beta.edu-saikidesu.repl.co/api/utility/fbprofile?uid=${parseInt(id)}`)).data.result.link;
        console.log(res)
  var usern = res.username == 'Không Xác Định' ? res.id : res.username;
      var usern1 = res.username == 'Không Xác Định' ? "Not Found" : res.username;
      
	let callback = function() {
            return api.sendMessage({
                body:`•——[INFORMATION]——•\n\nName: ${res.name}\nFacebook URL: https://facebook.com/${usern}\nUsername: •——[${usern}]——•`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
		return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`${err}`, event.threadID)
    }
    }