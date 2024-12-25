module.exports = {
	config: {
		name: "🫡",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Salut militaire",
		longDescription: "Réponses sarcastiques pour un salut militaire.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🫡") {
			const responses = [
				"Tu veux qu'on te félicite pour ce salut ? Tu n'es même pas militaire.",
				"Bravo, tu viens de donner le salut le plus forcé de l'histoire. Quel respect.",
				"Tu pensais qu'en faisant ça, t'allais impressionner quelqu'un ? Spoiler : ça ne marche pas.",
				"Tu es un chef militaire maintenant ? Parce que ce salut fait plus rire qu'autre chose.",
				"Ce salut militaire, c'est pas mal... mais c'est un peu too much pour juste répondre à un texto.",
				"Qu'est-ce que tu veux ? Qu'on se mette tous au garde-à-vous maintenant ?",
				"Ce geste, c'est juste pour te rappeler que tu n'es pas vraiment un soldat.",
				"Ah, un peu de discipline dans ce monde de chaos. Mais désolé, tu n'es pas dans l'armée.",
				"Tu veux nous montrer ta hiérarchie maintenant ? J'ai l'impression qu'on va se faire un défilé.",
				"Tu viens de te faire passer pour un militaire. Désolé, mais on n'y croit pas une seconde.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
