module.exports = {
	config: {
		name: "😋",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Savourer",
		longDescription: "Réponses sarcastiques pour un visage savourant la nourriture.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😋") {
			const responses = [
				"Ah, tu te régales ? Moi, je vois juste un visage en mode 'je n'ai rien à faire'.",
				"Ça a l'air super appétissant… mais ton visage n'est pas convaincant du tout.",
				"Tu fais ça pour paraître mignon, mais tu as l'air juste un peu idiot.",
				"Tu sais, faire semblant de savourer la nourriture comme ça, c'est ridicule.",
				"Tu sais que ce genre de comportement, c'est réservé aux enfants, non ?",
				"Ce visage est censé être sexy, mais ça ressemble plus à un malaise général.",
				"Ça a l'air délicieux, mais toi, tu as l'air juste affamé.",
				"Si tu crois que ce visage fait de toi un expert en nourriture, tu te trompes.",
				"Tu sais, on dirait plus que tu viens de découvrir la nourriture, un peu trop enthousiaste.",
				"Franchement, si tu étais plus discret, tu paraîtrais moins bizarre.",
				"Ce visage n'est même pas une bonne tentative d'être mignon. On dirait un animal qui a trouvé un repas.",
				"Tu fais un peu trop d'histoires pour un simple repas.",
				"Si tu boudes autant pour de la nourriture, je me demande comment tu réagirais à une vraie catastrophe.",
				"Ton visage dit 'j'adore manger' mais en vrai, on dirait que tu ne sais même pas quoi faire de ta vie.",
				"Ce visage, c'est celui d'un enfant qui vient de découvrir son premier goûter.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
