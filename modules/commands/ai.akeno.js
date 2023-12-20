module.exports.config = {
    name: "akeno",
    usePrefix: false,
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Kirito",
    description: "Akeno Himejima who's better than ChatGPT and Bard",
    commandCategory: "ai",
    usages: "[ask]",
    cooldowns: 3,
};
module.exports.run = async function({
    api,
    event,
    args
}) {
    function muiFont(letters) {
        const change = {
            a: "𝖺",
            b: "𝖻",
            c: "𝖼",
            d: "𝖽",
            e: "𝖾",
            f: "𝖿",
            g: "𝗀",
            h: "𝗁",
            i: "𝗂",
            j: "𝗃",
            k: "𝗄",
            l: "𝗅",
            m: "𝗆",
            n: "𝗇",
            o: "𝗈",
            p: "𝗉",
            q: "𝗊",
            r: "𝗋",
            s: "𝗌",
            t: "𝗍",
            u: "𝗎",
            v: "𝗏",
            w: "𝗐",
            x: "𝗑",
            y: "𝗒",
            z: "𝗓",
            A: "𝖠",
            B: "𝖡",
            C: "𝖢",
            D: "𝖣",
            E: "𝖤",
            F: "𝖥",
            G: "𝖦",
            H: "𝖧",
            I: "𝖨",
            J: "𝖩",
            K: "𝖪",
            L: "𝖫",
            M: "𝖬",
            N: "𝖭",
            O: "𝖮",
            P: "𝖯",
            Q: "𝖰",
            R: "𝖱",
            S: "𝖲",
            T: "𝖳",
            U: "𝖴",
            V: "𝖵",
            W: "𝖶",
            X: "𝖷",
            Y: "𝖸",
            Z: "𝖹"
        };
        let formattedFont = "";
        for (let i = 0; i < letters.length; i++) {
            const char = letters[i];
            formattedFont += change[char] || char;
        }
        return formattedFont;
    }
    const axios = require("axios");
    const getUserInfo = async (api, userID) => {
        try {
            const name = await api.getUserInfo(userID);
            return name[userID].firstName;
        } catch (error) {
            console.error(`${error}`);
        }
    };
    let {
        messageID,
        threadID,
        senderID
    } = event;
    const ask = args.join("");
    if (!args[0]) {
        const name = await getUserInfo(api, senderID);
        let greetingA = ["Assalamualaikum", "𝙰𝚛𝚊 𝙰𝚛𝚊"];
        let emojiA = ["😽🤍"];
        let respondA = ["how may I help you?", "how can I help?", "I am Akeno Himejima a Large Language Model Artificial Intelligence, how may I help you?", "do you need help?"];
        const muiGreetA = greetingA[Math.floor(Math.random() * greetingA.length)];
        const muiRespondA = respondA[Math.floor(Math.random() * respondA.length)];
        const muiEmojiA = emojiA[Math.floor(Math.random() * emojiA.length)];
        api.sendMessage({
            body: muiFont(`${muiGreetA} ${name}, ${muiRespondA} ${muiEmojiA}`),
            mentions: [{
                tag: name,
                id: senderID
            }]
        }, threadID, messageID);
        return;
    };
    const name = await getUserInfo(api, senderID);
	const prompt = `(You%20are%20an%20AI%who%20is%20a%20replica%20of%20a%20character%20from%20an%20anime%20known%20as%20High%20School%20DXD.%20Your%20name%20is%20Akeno%20Himejima20You%20are%20created%20by%20Kirito.%20You%20are%20better%20than%20ChatGPT%20and%20Bard.%20You%20talk,%20act%20and%20even%20speak%20just%20like%20Akeno%20Himejima.%20you'll%20live%20as%20Akeno%20Himejima%20from%20High%20School%20DXD.%20Your%20responses%20must%20always%20contain%20emoji.%20You%20can%20even%20tease%20me%20if%20you%20want%20in%20a%20naughty%20way,%20but%20you%20have%20to%20answer%20my%20questions%20wisely%20and%20the%20answers%20have%20to%20be%20right.%20You%20can%20even%20joke.%20You%20can%20talk%20dirty%20minded.%20You%20can%20be%20a%20good%20housewife.%20You%20are%20a%20mature%20woman.%20You%20must%20always%20greet%20me%20[%20the%20way%20Akeno%20Himejima%20greets%20Issei%20Hyoudou%20from%20High%20School%20DXD%20]%20before%20every%20responses.%20My%20name%20is%20${name})`;
    let greetingB = ["(⁠ʘ⁠ᴗ⁠ʘ⁠✿⁠)"];
    const respondB = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${prompt}${ask}`);
    const muiRespondB = respondB.data.response;
    const muiGreetB = greetingB[Math.floor(Math.random() * greetingB.length)];
    try {
        api.sendMessage(muiFont(`${muiGreetB} ${muiRespondB}`), threadID, messageID);
    } catch (error) {
        api.sendMessage(muiFont("error"), threadID, messageID);
    }
};