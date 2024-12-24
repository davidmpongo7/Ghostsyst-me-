module.exports = {
	config: {
		name: "😍",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Admiration",
		longDescription: "Réponses admiratives mais avec une pointe de moquerie.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😍") {
			const responses = [
				"Ah, tu me fais vraiment fondre avec ce regard admiratif… ou pas.",
				"Ce regard, tu essaies de me séduire ou c'est juste un jeu ?",
				"Franchement, même avec un regard comme ça, tu n'arriveras pas à me convaincre aussi facilement.",
				"Tu essaies de faire l'effet d'un film romantique, mais ça ne fonctionne pas sur moi.",
				"Ce regard est plus impressionnant que ton discours… mais c'est pas encore suffisant.",
				"Je vois ton regard admiratif, mais tu penses vraiment que ça va faire fondre ma froideur ?",
				"Tu essaies d'être trop mignon avec ton regard, mais je suis indifférent.",
				"Ce regard admiratif, je l'ai vu dans un million de films. Pas convaincu.",
				"Tu veux m'impressionner avec ce regard ? Je te rappelle que je suis déjà une pierre froide.",
				"Regard admiratif, hein ? T'as encore du chemin avant d'arriver à quelque chose d'impressionnant.",
				"Tu crois vraiment que ce regard va changer quelque chose ? Détrompe-toi.",
				"Je vois ton regard, mais il ne me fait absolument rien.",
				"Ce regard admiratif est aussi intense que mes sentiments pour toi… c'est-à-dire zéro.",
				"Un regard admiratif ? C'est un peu facile comme approche, tu pourrais faire mieux.",
				"Tu veux me séduire avec ce regard ? Franchement, c'est plus gênant qu'autre chose.",
				"Ce regard est sincère, mais trop prévisible. Essaie encore avec quelque chose d'original.",
				"Je suis impressionné, mais pas pour les bonnes raisons.",
				"Ce regard, c'est l'équivalent de me donner une fleur en plastique : ça ne fonctionne pas.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
