module.exports = {
	config: {
		name: "😬",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Sourire forcé",
		longDescription: "Réponses sarcastiques pour un sourire forcé.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😬") {
			const responses = [
				"Ah, tu souris comme ça pour cacher ta gêne ? T'as l'air plus mal à l'aise qu'un poisson hors de l'eau.",
				"Ce sourire forcé, ça veut tout dire. T'es en train de te dire que tu regrette d'être ici, pas vrai ?",
				"Si c'est censé être un sourire, c'est un échec total.",
				"Ton sourire là, c'est comme une tentative de cacher un gros mensonge.",
				"Ce genre de sourire, c'est celui que t'as quand t'essaies de convaincre quelqu'un que tout va bien alors que ça va pas du tout.",
				"Franchement, on dirait plus que tu viens de boire un verre de vinaigre.",
				"Tu veux qu'on arrête de te mettre dans des situations gênantes ? Parce que là, tu veux juste disparaître.",
				"Ce sourire-là, c'est plus une façon de dire 'je suis mal à l'aise' qu'une vraie expression de joie.",
				"Si tu voulais qu'on te prenne pour quelqu'un de détendu, t'as échoué avec ce sourire forcé.",
				"Ce sourire, c'est la preuve vivante que tu aurais dû choisir un autre emoji.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
