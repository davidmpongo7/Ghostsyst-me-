module.exports = {
	config: {
		name: "🥺",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage suppliant",
		longDescription: "Réponses sarcastiques pour un visage suppliant.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🥺") {
			const responses = [
				"Ah, tu me regardes comme ça ? Si tu voulais me faire fondre, c'est raté.",
				"Franchement, tu crois que tu vas obtenir ce que tu veux juste avec ce regard ? C'est pathétique.",
				"Tu veux un biscuit ? Parce que ce regard, c'est l'ultime tentative de faire fondre quelqu'un, mais ça ne marche pas.",
				"Si tu crois que ça va m'impressionner, tu te mets le doigt dans l'œil.",
				"Tu veux que je fasse quoi, là ? Te donner ce que tu veux juste parce que t'as l'air d'un chiot abandonné ?",
				"J'espère que t'as compris que ce genre de regard ne fait plus effet à ce stade.",
				"Non, je ne vais pas céder. Si tu veux quelque chose, essaie d'utiliser des mots au lieu de faire ton regard d'innocent.",
				"Si tu crois que cette petite bouille te rend mignon, tu te trompes royalement.",
				"Tu t'attends à quoi, une récompense ? Regarde-toi bien, t'as l'air d'un petit enfant capricieux.",
				"Regarde, t'as l'air désespéré, mais ça ne va pas changer ma décision.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
