module.exports = {
	config: {
		name: "🫠",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Fonce dans la fonte",
		longDescription: "Réponses sarcastiques pour l'emoji de visage fondant.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🫠") {
			const responses = [
				"Tu fonces autant qu'un glaçon sous un soleil de 40° !",
				"Ce visage fondu, c'est exactement toi après une conversation sérieuse. Totalement éteint.",
				"On dirait que tu as fondu avant même d'essayer de briller.",
				"Tu ressembles plus à une bougie qui fond lentement qu'à une personne avec un vrai objectif.",
				"Ce visage fondu… C'est ton charme qui disparaît à chaque mot ?",
				"Ah, tu fonces ! Mais pas dans la bonne direction, mon ami.",
				"Cette expression, c'est toi après avoir entendu un commentaire intelligent, non ?",
				"Tu me fais penser à une glace au chocolat oubliée dans la voiture.",
				"Ce visage qui fond, c'est exactement ce que tu fais à chaque fois que tu essaies de briller.",
				"Tu as l'air de fondre plus vite que ton discours ne prend forme.",
				"Fais attention, tu vas te transformer en puddle si tu continues comme ça.",
				"Regarde-toi, un petit peu de chaleur et tu disparais comme un mirage.",
				"Tu es une vraie œuvre d'art fondue. Tellement impressionnant… pas du tout.",
				"Tu fonces avec style, mais c'est plus la fonte du ridicule que de la grandeur.",
				"Tu sais, tu pourrais éviter de fondre si tu ne disais pas autant de bêtises.",
				"Tu ressembles à du chocolat au soleil. Charmant, non ?",
				"Si tu fonces comme ça, t'es sur le point de disparaître comme un mauvais film.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
