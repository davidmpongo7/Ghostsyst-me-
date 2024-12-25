const axios = require("axios");

module.exports = {
	config: {
		name: 'vexbot',
        aliases: ["vex", "rude", "flirtybot"],
		version: '1.2',
		author: 'Luxion/fixed by Riley',
		countDown: 0,
		role: 0,
		shortDescription: 'AI CHAT - Pervers et sarcastique',
		longDescription: {
			en: 'Chat with the most provocative AI, VexBot'
		},
		category: 'Ai chat',
		guide: {
			en: '   {pn} <word>: chat with vexbot'
				+ '\nExample:{pn} hi'
		}
	},

	langs: {
		en: {
			turnedOn: 'Oh, tu veux vraiment qu'on parle ? 🤪🥃 Prépare-toi...',
			turnedOff: 'Pff... Tu veux vraiment que j\'arrête de parler à un crétin pareil ? 😒',
			chatting: 'Déjà en train de discuter avec moi... T'as vraiment rien d'autre à foutre ?',
			error: 'Franchement, t'es qu'un débile 🙄'
		}
	},

	onStart: async function ({ args, threadsData, message, event, getLang }) {
		if (args[0] == 'on' || args[0] == 'off') {
			await threadsData.set(event.threadID, args[0] == "on", "settings.simsimi");
			return message.reply(args[0] == "on" ? getLang("turnedOn") : getLang("turnedOff"));
		}
		else if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				console.log(err)
				return message.reply(getLang("error"));
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand, getLang }) => {
		if (args.length > 1 && !isUserCallCommand && await threadsData.get(event.threadID, "settings.simsimi")) {
			try {
				const langCode = await threadsData.get(event.threadID, "settings.lang") || global.GoatBot.config.language;
				const responseMessage = await getMessage(args.join(" "), langCode);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				return message.reply(getLang("error"));
			}
		}
	}
};

async function getMessage(yourMessage, langCode) {
	const res = await axios.post(
    'https://api.simsimi.vn/v1/simtalk',
    new URLSearchParams({
        'text': yourMessage,
        'lc': 'fr'
    })
);

	if (res.status > 200)
		throw new Error(res.data.success);

	return res.data.message;
}
