module.exports = {
	config: {
		name: "😛",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Tirage de langue",
		longDescription: "Réponses sarcastiques pour un visage tirant la langue.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😛") {
			const responses = [
				"Vraiment ? Tirer la langue ? T'as cinq ans ou quoi ?",
				"Tu crois vraiment que ce geste te rend plus marrant ? Désolé de te décevoir, mais c'est juste gênant.",
				"Tu penses que tirer la langue va impressionner quelqu'un ? C'est mignon, mais ça ne fonctionne plus à ton âge.",
				"Ah, tirage de langue… C'est le summum de l'humour, non ? Je suis mort de rire… pas vraiment.",
				"Ah, la fameuse langue tirée. C'est ça, ton plus grand talent ?",
				"Tu veux vraiment me montrer ta langue ? Super. C'est exactement ce dont j'avais besoin.",
				"Tu as l'air d'un enfant qui ne sait pas se comporter en société. Bravo.",
				"On dirait que t'es en train de te préparer pour un concours de grimaces. Bonne chance, mon pote.",
				"Tu veux jouer à qui a la plus grande langue ? Parce que si c'est ça, t'as déjà perdu.",
				"On a tous vu ta langue. Tu peux maintenant la remettre dans ta bouche et grandir un peu ?",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
