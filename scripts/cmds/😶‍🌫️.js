module.exports = {
	config: {
		name: "😶‍🌫️",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage brumeux",
		longDescription: "Réponses sarcastiques pour un visage brumeux.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😶‍🌫️") {
			const responses = [
				"Ah, t'es dans la brume maintenant, hein ? Tu te caches derrière tes pensées floues, super mystérieux.",
				"Ce visage brumeux, c'est exactement ce qu'on appelle l'art de ne rien dire sans que ça paraisse trop suspect.",
				"Est-ce que tu essayes d'être mystérieux ou tu viens juste de perdre toute forme de logique ?",
				"Non mais sérieux, c'est le genre de moment où tu fais semblant de réfléchir à un problème existentiel qui n'existe même pas.",
				"Tu veux qu'on essaie de déchiffrer ton énigme brumeuse ? Je parie que c'est juste un grand vide.",
				"Ça se voit que t'as aucune idée de ce qui se passe autour de toi. T'es là, en mode fantôme, personne te comprend.",
				"Peut-être que tu veux qu'on pense que t'es sage et que tu médites, mais on voit bien que tu n'as aucune idée de ce que tu fais.",
				"Le regard brumeux ? Ça se fait, mais au bout d'un moment, ça devient juste un super moyen de ne rien dire.",
				"Tu veux qu'on joue à qui devine ce qui se passe dans ta tête ? Spoiler : on n'en a aucune idée.",
				"Tu penses que la brume dans ton visage va cacher ton manque de personnalité ? C'est pas si simple.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
