module.exports = {
	config: {
		name: "🫥",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage écarquillé",
		longDescription: "Réponses sarcastiques pour un visage avec les yeux écarquillés.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🫥") {
			const responses = [
				"Wow, tes yeux viennent de sortir de leur orbite ou c'est juste un sursaut de surprise mal placé ?",
				"Tu crois vraiment qu'en ouvrant les yeux aussi grand, on va être impressionné ? C'est juste flippant.",
				"Si t'avais un peu plus de cervelle, tu pourrais l'utiliser à la place de faire semblant d'être choqué par tout.",
				"Tu veux qu'on t'éclaire ou tu veux juste continuer à regarder le monde comme si tu venais de sortir d'une grotte ?",
				"On dirait que t'as vu un fantôme. C'est juste un texto, calme-toi.",
				"Est-ce que tu vas t'arrêter de dévisager tout le monde ou tu comptes faire ça toute la journée ?",
				"Ce regard, c'est celui de quelqu'un qui a vu trop de films d'horreur. Détends-toi, ça va aller.",
				"Tu fais ça pour être drôle ou c'est juste ton visage naturel quand tu essaies de comprendre une blague ?",
				"Ce visage écarquillé, c'est comme si tu venais de réaliser que tu as oublié d'acheter du pain. C'est pas la fin du monde.",
				"Tu veux un cache-œil ou tu vas continuer à ouvrir tes yeux comme si t'étais dans un film d'horreur ?",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
