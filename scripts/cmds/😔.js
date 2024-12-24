module.exports = {
	config: {
		name: "😔",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage triste",
		longDescription: "Réponses sarcastiques pour un visage triste.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😔") {
			const responses = [
				"Ah, t'es triste ? C'est mignon, mais sérieusement, ça va pas sauver ta journée.",
				"Tu veux un câlin ? Ou t'es juste en train de te chercher des excuses pour être déprimé ?",
				"Franchement, on dirait que t'as perdu ton dernier bonbon, pas la fin du monde non plus.",
				"On dirait que t'as pas dormi depuis 3 jours. Il est temps de prendre des vitamines, mon ami.",
				"Si ça te console, t'es pas seul dans ce monde de gens déprimés.",
				"Tu crois qu'avec ce visage triste tu vas faire pleurer tout le monde ? Désolé, c'est juste pathétique.",
				"Ah, je vois que la vie t'a frappé, mais bon, on survit tous, n'est-ce pas ?",
				"Si tu as besoin d'une épaule sur laquelle pleurer, je suis là… pour rire de toi, bien sûr.",
				"Tu veux qu'on te paye une glace ou tu vas juste continuer à faire la tronche ?",
				"Franchement, ça se voit que tu t'es pris un râteau. Mais c'est pas la fin du monde. Peut-être demain ?",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
