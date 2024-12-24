module.exports = {
	config: {
		name: "😙",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Bisou mignon",
		longDescription: "Réponses un peu plus mignonnes, mais avec un peu d'ironie.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😙") {
			const responses = [
				"Tu essaies de m'envoyer un bisou mignon, mais franchement, c'est un peu trop forcé.",
				"Ah, ce bisou avec cœur ? C'est tout ? T'es sûr qu'il est sincère ?",
				"Un bisou avec cœur, mais tu veux vraiment me faire fondre ou m'achever avec ce niveau de mignonnerie ?",
				"Ce bisou est adorable, mais je suis assez résistant à la tentation.",
				"Un petit bisou comme ça ne va pas réussir à m'impressionner, mais j'apprécie l'effort.",
				"Si tu pensais que ce bisou allait me faire fondre, laisse-moi te dire que t'as du travail.",
				"Un bisou avec cœur ? C'est mignon, mais j'ai vu plus convaincant, franchement.",
				"Je vois ce bisou, mais il ne me fait ni chaud ni froid. Faudrait peut-être rajouter du piquant.",
				"Un bisou avec cœur, tu sais que ça ne me fait pas craquer, hein ?",
				"Ce bisou avec cœur est mignon, mais il manque un petit quelque chose… comme de la sincérité.",
				"Tu veux vraiment charmer avec un bisou aussi faible ? Tu vas devoir revoir tes priorités.",
				"Ce bisou est aussi sincère qu'un faux sourire de politicien.",
				"Je vais être honnête, ce bisou ne me fait rien, mais c'est mignon dans son genre.",
				"Tu crois qu'un bisou avec cœur va changer quelque chose ? C'est juste un joli cadeau emballé dans de la fausse tendresse.",
				"Tu veux un bisou sincère ? Faudra y mettre un peu plus de cœur que ça.",
				"Ce bisou est adorable, mais il ne me fait ni chaud ni froid. La prochaine fois, essaye avec de l'originalité.",
				"J'aurais cru qu'un bisou comme ça me ferait fondre, mais en fait, j'ai juste eu une petite crise de rire.",
				"Un bisou avec cœur, c'est mignon, mais ce n'est pas encore suffisant pour m'amadouer.",
				"Ah, ce bisou, c'est mignon, mais t'es pas à la hauteur de ta propre mignonnerie.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
