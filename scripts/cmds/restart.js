const fs = require("fs-extra");

module.exports = {
	config: {
		name: "restart",
		version: "1.0",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Khởi động lại bot",
			en: "Restart bot"
		},
		longDescription: {
			vi: "Khởi động lại bot",
			en: "Restart bot"
		},
		category: "Owner",
		guide: {
			vi: "   {pn}: Khởi động lại bot",
			en: "   {pn}: Restart bot"
		}
	},

	langs: {
		vi: {
			restartting: "🔄 | Đang khởi động lại bot..."
		},
		en: {
			restartting: "🔑 | 𝙍𝙚𝙙𝙚𝙢𝙖𝙧𝙧𝙖𝙜𝙚 𝙙𝙪 𝙗𝙤𝙩....(҂`_´)\n════ •『 ♡ 』• ═════\n𝙇𝙤𝙖𝙙𝙞𝙣𝙜.....░░░░░░░░5%✨"
		}
	},

	onLoad: function ({ api }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		if (fs.existsSync(pathFile)) {
			const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
			api.sendMessage(`❤ |  𝙍𝙚𝙙𝙚𝙢𝙖𝙧𝙧𝙖𝙜𝙚 𝙚𝙛𝙛𝙚𝙘𝙩𝙪𝙚 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚 𝙩𝙤𝙪𝙩 𝙘𝙖𝙢𝙥𝙞𝙤!!!\n❖ ── ✦ ──『✙』── ✦ ── ❖\n(⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧ === ■■■■100%✨\n🕒 | 𝙏𝙞𝙢𝙚: ${(Date.now() - time) / 1000}s`, tid);
			fs.unlinkSync(pathFile);
		}
	},

	onStart: async function ({ message, event, getLang }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);

		// Envoi du message initial
		await message.reply(getLang("restartting"));

		let progress = 0;
		const loadingMessage = await message.reply("🔑 | 𝙍𝙚𝙙𝙚𝙢𝙖𝙧𝙧𝙖𝙜𝙚 𝙙𝙪 𝙗𝙤𝙩....(҂`_´)\n════ •『 ♡ 』• ═════\n𝙇𝙤𝙖𝙙𝙞𝙣𝙜.....░░░░░░░░5%✨");

		const interval = setInterval(async () => {
			if (progress < 100) {
				progress += 10;
				let progressBar = '';
				if (progress === 10) progressBar = '█░░░░░░░░░░5%🔄';
				if (progress === 20) progressBar = '██░░░░░░░░░18%🔄';
				if (progress === 30) progressBar = '███░░░░░░░░30%🔄';
				if (progress === 40) progressBar = '████░░░░░░░42%🔄';
				if (progress === 50) progressBar = '█████░░░░░░56%🔄';
				if (progress === 60) progressBar = '██████░░░░░63%🔄';
				if (progress === 70) progressBar = '████████░░░75%🔄';
				if (progress === 80) progressBar = '█████████░░86%🔄';
				if (progress === 90) progressBar = '██████████░95%🔄';
				if (progress === 100) progressBar = '████████████100%✅';  // Pas de "░░" pour 100%

				await api.editMessage(`🔑 | 𝙍𝙚𝙙𝙚𝙢𝙖𝙧𝙧𝙖𝙜𝙚 𝙙𝙪 𝙗𝙤𝙩....(҂`_´)\n════ •『 ♡ 』• ═════\n𝙇𝙤𝙖𝙙𝙞𝙣𝙜.....${progressBar}✨`, loadingMessage.messageID);
			} else {
				clearInterval(interval);  // Arrête l'intervalle une fois à 100%
				await api.editMessage("🔑 | 𝙍𝙚𝙙𝙚𝙢𝙖𝙧𝙧𝙖𝙜𝙚 𝙙𝙪 𝙗𝙤𝙩....(҂`_´)\n════ •『 ♡ 』• ═════\n𝙇𝙤𝙖𝙙𝙞𝙣𝙜.....████████████100%✨", loadingMessage.messageID);
				await message.reply("Bot is restarting now...");

				// Redémarrage du bot
				process.exit(2);
			}
		}, 1000);  // Mise à jour toutes les secondes
	}
};
