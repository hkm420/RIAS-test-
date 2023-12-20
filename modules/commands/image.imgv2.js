const axios = require("axios");
const fs = require('fs-extra');

module.exports.config = {
    name: "imgv2",
    version: "1.0",
    hasPermission: 0,
    credits: "Kirito",
    description: "imagge generator",
    commandCategory: "Image",
    usages: "[prompt]",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
    const prompt = encodeURIComponent(args.join(" "));

    // Add your cookies 
  
    const _U = "1SwnaQhg4PiKmulmxgNC_SUALNkfV4DFYP96XAEyqBz7b9V2wKV-vAtpj1g3HYj2UtgiX87nScGlFyF1pNoqYI0TUd5cYEXvBFKcRhJgshbwDnDowUdKyfxc4e7M7YoJF1ASM_deIHIitMwx-X7h_odh9WMUmLtEHC-7q3EhoUpFhds2pSwt5niTkJ7JpHK6r71p2hGrXAizvsCmRlfCnJAgLIQVl4oNiIdEMempn_Zc"; // _U value here
    const SRCHHPGUSR = "SRCHLANG=en&CW=431&CH=844&SCW=431&SCH=844&BRW=MW&BRH=MT&DPR=2.5&UTC=360&DM=1&PV=12.0.0&WTS=63833509091&PRVCW=431&PRVCH=844&HV=1697913454"; // SRCHHPGUSR value here

    const apiURL = `https://dalle-3.siam-apiproject.repl.co/generate`;

    try {
        const processingMessage = await api.sendMessage("Your request is being processed...", event.threadID);

        const response = await axios.get(apiURL, {
            params: {
                prompt: prompt,
                bing_cookie: encodeURIComponent(_U),
                auth_cookie_SRCHHPGUSR: encodeURIComponent(SRCHHPGUSR)
            }
        });

        const data = response.data;

        if (!data.images || Object.keys(data.images).length === 0) {
            await api.sendMessage("The prompt has been Blocked by API owner. Please try again...", event.threadID);
            return;
        }

        if (data.images) {
            const imageKeys = Object.keys(data.images);
            const attachment = [];

            for (let i = 0; i < imageKeys.length; i++) {
                const imgURL = data.images[imageKeys[i]];
                const path = `${i + 1}.jpg`;

                const imageResponse = await axios.get(imgURL, { responseType: 'arraybuffer' });
                fs.writeFileSync(path, Buffer.from(imageResponse.data, 'binary'));
                attachment.push(fs.createReadStream(path));
            }

            await api.sendMessage({
                body: "Here are the images for your prompt:",
                attachment: attachment,
            }, event.threadID);

            for (let i = 0; i < imageKeys.length; i++) {
                fs.unlinkSync(`${i + 1}.jpg`);
            }

            await api.unsendMessage(processingMessage.messageID);
        } else {
            await api.sendMessage("API response format is incorrect 🐸", event.threadID);
        }
    } catch (error) {
        console.error(error);
        await api.sendMessage("An error occurred while processing your request.", event.threadID);
    }
};
                  