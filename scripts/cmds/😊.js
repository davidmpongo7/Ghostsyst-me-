module.exports = {
	config: {
		name: "😊",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Sourire",
		longDescription: "Réponses sarcastiques pour un sourire un peu trop mignon.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😊") {
			const responses = [
				"Ce sourire… si sincère, c'est presque inquiétant. Qu'est-ce que tu veux vraiment ?",
				"Tu essaies de paraître mignon, mais on dirait juste que tu essaies de cacher quelque chose.",
				"Ce sourire est un peu trop forcé pour être réel, tu n'as pas besoin de mentir ici.",
				"Ah, un sourire ! Mais on sait tous que ça cache une profonde déception.",
				"Tu souris, mais je vois bien que tu es en train de préparer une catastrophe.",
				"Ce sourire est comme un filtre Instagram : ça cache un tas de choses derrière.",
				"Ce sourire est tellement authentique, c'est comme un fake Louis Vuitton.",
				"Ton sourire essaie de dire : 'je suis heureux', mais ta posture dit le contraire.",
				"Ce sourire est presque aussi faux que tes excuses habituelles.",
				"Tu penses que ce sourire va cacher tes mauvaises intentions ? Eh bien, tu te trompes.",
				"Ce sourire est l'équivalent émotionnel d'un fichier corrompu, ça ne marche pas.",
				"Le sourire, c'est bien, mais ça ne cache pas tes véritables intentions. Désolé de briser ton illusion.",
				"On dirait que tu essaies de cacher tes erreurs derrière ce sourire, mais non, ça ne fonctionne pas.",
				"Tu souris, mais je suis sûr que tu essaies de retenir un fou rire après une catastrophe.",
				"Ce sourire ne trompe personne. On sait que tu as probablement fait quelque chose de stupide.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
