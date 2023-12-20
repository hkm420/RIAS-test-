module.exports.config = {
	name: "ai3",
	version: "1.0.1",
	hasPermission: 0,
	credits: "Jun",
	description: "Gpt-4 ",
	commandCategory: "ai",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Users, args }) => {
	const fs = require('fs');
	const axios = require('axios');

	const prompt = args.join(" ");

	const id = event.senderID;
	const name = (await Users.getData(event.senderID)).name;
	const b = "repl";

	const apikey = ""
    `&name=${name}&id=${id}`; // don't modify this, it's important for 50 requests per day per user

	try {
		const res = await axios.get(`https://api.whahhh.${b}.co/test?prompt=${prompt}${apikey}`);
		const m = res.data.result;
		const av = res.data.av;
		const array = [{ id: id, tag: name }];
		const g = m.replace(/{name}/g, name);

		if (av) {
			const response = await axios.get(av, { responseType: 'stream' });
			let extension = av.split('.').pop();
			let path = __dirname + `/cache/image.${extension}`;
			const writer = fs.createWriteStream(path);

			response.data.pipe(writer);

			writer.on('finish', () => {
				api.sendMessage({
					body: g,
					mentions: array,
					attachment: fs.createReadStream(path)
				}, event.threadID, event.messageID, () => fs.unlinkSync(path));
			});
		} else {
			api.sendMessage({
				body: g,
				mentions: array
			}, event.threadID, event.messageID);
		}
	} catch (error) {
		api.sendMessage("error bro", event.threadID, event.messageID);
	}
};