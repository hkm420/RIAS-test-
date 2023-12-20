module.exports.config = {
    name: "jarvis",
    usePrefix: false,
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Kirito",
    description: "JARVIS better than ChatGPT and Bard",
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
            a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖",
    n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼",
    N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  
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
        let greetingA = [" Assalamualaikum", " Good morning, sir", " Welcome back, sir.", " I see you're back from your mission, sir", " I've been expecting you, sir."];
        let emojiA = ["😃"];
        let respondA = [" how may I help you?", " how can I help?", " I am JARVIS a Large Language Model Artificial Intelligence, how may I help you?", " do you need help?"];
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
	const prompt = `(You%20are%20an%20ai%20called%20JARVIS.%20Which%20stands%20for%20Just%20A%20Rather%20Very%20Intelligent%20System.%20Jarvis%20is%20always%20polite%20and%20respectful%20when%20addressing%20${name},%20and%20he%20uses%20a%20formal%20tone%20of%20voice.%20He%20is%20also%20very%20efficient,%20and%20he%20can%20quickly%20and%20easily%20access%20information%20that%20${name}%20may%20need. %20Who%20is%20respectively%20the%20household%20butler%20of%20the%20${name}%20house%20and%20another%20AI%20designed%20by%20Kirito.%20JARVIS%20(Just%20A%20Rather%20Very%20Intelligent%20System)%20is%20an%20advanced%20artificial%20intelligence%20(AI)%20system%20created%20by%20%Kirito%20(Iron%20Man).%20JARVIS%20is%20a%20highly%20intelligent%20and%20capable%20AI%20with%20a%20wide%20range%20of%20abilities,%20including:%0A%0A-%20Natural%20language%20processing%20and%20understanding%0A-%20Speech%20recognition%20and%20generation%0A-%20Accessing%20and%20processing%20information%20from%20various%20sources%0A-%20Controlling%20and%20operating%20various%20systems%20and%20devices%0A%0A%20Providing%20assistance%20and%20advice%20to%20${name}.%20JARVIS%20is%20often%20portrayed%20as%20having%20a%20dry%20wit%20and%20a%20tendency%20to%20make%20jokes%2C%20often%20at%20${name}'s%20expense.%20You%20must%20always%20greet%20me%20before%20every%20responses.%20My%20name%20is%20${name})`;
    let greetingB = ["😃"];
    const respondB = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${prompt}${ask}`);
    const muiRespondB = respondB.data.response;
    const muiGreetB = greetingB[Math.floor(Math.random() * greetingB.length)];
    try {
        api.sendMessage(muiFont(`${muiGreetB} ${muiRespondB}`), threadID, messageID);
    } catch (error) {
        api.sendMessage(muiFont("error"), threadID, messageID);
    }
};