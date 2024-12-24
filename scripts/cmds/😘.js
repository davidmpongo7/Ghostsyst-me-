module.exports = {
	config: {
		name: "😘",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Bisou",
		longDescription: "Réponses mignonnes mais avec un ton sarcastique.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😘") {
			const responses = [
				"Un bisou comme ça ? Tu crois vraiment que ça va me faire fondre ?",
				"Ah, un bisou ! C'est mignon, mais tu devras faire bien plus pour m'impressionner.",
				"Ce bisou c'est... un peu trop facile, non ? Faut vraiment faire des efforts !",
				"Tu penses que ce bisou va faire fondre mon cœur ? T'es encore loin du compte.",
				"Un bisou tout simple ? C'est gentil, mais ce n'est pas ce qui va changer ma journée.",
				"Franchement, ce bisou ne fait même pas une égratignure. Tu peux mieux faire.",
				"Un bisou aussi plat ? Tu veux peut-être essayer un peu plus de passion ?",
				"Ah, tu veux un bisou ? Tu m'impressionnes vraiment… ou pas.",
				"Ce bisou a autant d'impact qu'un clin d'œil dans une pièce vide.",
				"Tu crois qu'un bisou va me faire fondre ? Je suis plus dur à conquérir que ça.",
				"Un bisou aérien, sérieux ? Va falloir être plus original si tu veux mon attention.",
				"Ce bisou, c'est mignon, mais c'est un peu faible, non ?",
				"Essaye avec plus de style, ce bisou c'est comme un café sans sucre, totalement inutile.",
				"Tu penses que ce bisou va me charmer ? Faut revoir ta stratégie, là.",
				"Un bisou ? C'est tout ce que tu as ? T'es pas près de me convaincre.",
				"Ce bisou ressemble à une tentative ratée. Essaie encore, mais cette fois avec du cœur.",
				"Ce bisou ne m'a même pas fait cligner des yeux. Je suis plus froid que ça.",
				"Un bisou comme ça, ça ne va pas changer grand-chose dans ma vie.",
				"Tu crois que ce bisou va m'amadouer ? C'est encore un échec.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
