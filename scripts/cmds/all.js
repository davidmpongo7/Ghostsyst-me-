module.exports = {
	config: {
		name: "all",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			vi: "Tag tất cả thành viên trong nhóm chat của bạn",
			en: "Tag all members in your group chat"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [nội dung | để trống]",
			en: "   {pn} [content | empty]"
		}
	},

	onStart: async function ({ message, event, args }) {
		const { participantIDs } = event;
		const lengthAllUser = participantIDs.length;
		const mentions = [];
		let body = args.join(" ") || "@all";
		let bodyLength = body.length;
		let i = 0;
		for (const uid of participantIDs) {
			let fromIndex = 0;
			if (bodyLength < lengthAllUser) {
				body += body[bodyLength - 1];
				bodyLength++;
			}
			mentions.push({
				tag: body[i],
				id: uid, fromIndex
			});
			i++;
		}

		const funnyResponses = [
			"Allez, tout le monde en ligne, préparez-vous à m'entendre ! 😎",
			"🔔 Attention, tout le monde est tagué ! Préparez-vous à lire ce chef-d'œuvre... 😅",
			"Tous les regards sur moi maintenant ! 😂",
			"Vous êtes tous tagués... Maintenant, répondez, on a du travail ! 😏",
			"Voici un message pour tout le monde, même si je sais que vous allez tous ignorer... 😜"
		];
		
		const randomResponse = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];

		message.reply({ body: body + `\n\n${randomResponse}`, mentions });
	}
};
