module.exports = {
	config: {
		name: "😚",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Bisou charmeur",
		longDescription: "Réponses plus charmeuses mais sarcastiques.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😚") {
			const responses = [
				"Un bisou aussi intense ? Tu crois vraiment que ça va me faire craquer ?",
				"Ton bisou est aussi convaincant que ton sens du timing, désolé de te dire ça.",
				"Ce bisou charmeur, c'est un peu comme une blague vieille de 10 ans : ça ne fait plus effet.",
				"Ah, tu veux me séduire avec ce bisou ? Détrompe-toi, c'est un échec total.",
				"Ce bisou a l'air tellement sincère, mais j'ai vu plus convaincant dans un film de série B.",
				"Franchement, ce bisou, il ne me fait rien. Je suis aussi résistant qu'un mur en béton.",
				"J'espère que ce bisou n'était pas censé être ton arme secrète, car je suis toujours aussi indifférent.",
				"Tu essaies de jouer au séducteur, mais ce bisou n'a même pas la puissance d'un regard perdu.",
				"Si tu pensais que ce bisou allait changer quelque chose, tu rêves. Va falloir plus que ça.",
				"Le bisou est bien, mais tu pourrais faire mieux si tu arrêtais de forcer l'effet.",
				"Ce bisou ressemble plus à une tentative de drague qu'à un vrai geste sincère.",
				"Franchement, si c'était un concours de charme, tu viens de perdre haut la main.",
				"Je vois ton bisou, mais je suis toujours aussi imperméable à tout ça.",
				"Ce bisou est plus une tentative de charme désespéré qu'autre chose.",
				"Essaye de m'impressionner avec quelque chose de plus original, ce bisou n'a rien d'exceptionnel.",
				"Si tu crois que ce bisou va m'émouvoir, tu fais erreur. Je suis immunisé.",
				"Tu crois qu'un bisou de plus va me faire fondre ? Non, merci. Pas aujourd'hui.",
				"Un bisou charmant ? Désolé, mais je ne tombe pas dans ce genre de piège.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
