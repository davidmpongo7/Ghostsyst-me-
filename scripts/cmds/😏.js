module.exports = {
	config: {
		name: "😏",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Regard suggestif",
		longDescription: "Réponses sarcastiques pour un regard suggestif.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😏") {
			const responses = [
				"Ah, tu essaies d'être mystérieux avec ce regard ? C'est déjà trop évident.",
				"Ce regard, c'est celui du 'je sais quelque chose que tu ne sais pas', mais franchement, je m'en fiche.",
				"Je vois ce regard, mais ce n'est pas aussi subtil que tu penses. Essayons d'être un peu plus créatif.",
				"Ce sourire en coin, je parie que tu essaies de cacher quelque chose de vraiment stupide.",
				"Tu te crois malin avec ce regard ? On dirait plus un amateur qui essaie de jouer à l'expert.",
				"Ce regard, c'est l'équivalent émotionnel d'un ‘Je n'ai aucune idée de ce que je fais’.",
				"Tu as ce regard de quelqu'un qui vient de faire une énorme bêtise. Je suis curieux de savoir laquelle.",
				"Ce regard n'est pas aussi sexy que tu penses. C'est juste gênant.",
				"Un regard si chargé de sous-entendus, mais je suis sûr que tu te demandes toi-même ce que tu veux dire.",
				"Tu es là avec ton regard de conspiration, mais je vois déjà tout à travers.",
				"Ce regard, c'est comme un piège : tu veux que je tombe dedans, mais je vais te laisser te débrouiller tout seul.",
				"Ce regard n'est qu'une façade. On sait tous que tu n'as pas la moindre idée de ce que tu fais.",
				"Tu essaies de paraître mystérieux avec ton regard, mais c'est juste risible.",
				"Ce regard, c'est celui de quelqu'un qui sait qu'il a fait une énorme erreur mais qui essaie de se rattraper.",
				"On dirait que tu penses que tu es dans un film d'espionnage. Spoiler alert : tu ne l'es pas.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
