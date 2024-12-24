module.exports = {
	config: {
		name: "🙂",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Sourire",
		longDescription: "Réponses sarcastiques avec un sourire qui cache bien des choses.",
		category: "reply",
	},
	onStart: async function() {},

	onChat: async function({ event, message }) {
		if (event.body && event.body.toLowerCase() == "🙂") {
			const responses = [
				"Ah, ce sourire, si innocent et si vide en même temps. C'est vraiment adorable.",
				"Tu souris comme ça pour cacher ton désespoir, hein ? Ça se voit.",
				"Ce sourire est presque aussi faux que ta dernière excuse.",
				"Tu sais, ce sourire ne fait pas de toi une personne agréable, juste quelqu'un qui essaie de paraître sympathique.",
				"Ce sourire, c'est comme une couverture jetée sur un canapé plein de taches. Tu essaies de cacher la réalité, mais ça ne marche pas.",
				"Ah, le sourire. Une technique bien connue pour masquer la douleur.",
				"Ce sourire est tellement sincère qu'on dirait une mauvaise publicité pour du dentifrice.",
				"Tu souris comme ça en pensant que ça va changer quelque chose, mais non, ça ne fera qu'aggraver la situation.",
				"Tu as ce sourire sur le visage, mais on sait tous que ça cache un océan de frustration.",
				"Ce sourire, c'est un peu comme un filtre Instagram. Tu essaies d'améliorer quelque chose qui ne l'est déjà pas.",
				"Si tu souris encore avec autant de faux, on va finir par te prendre pour un clown.",
				"Ce sourire… c'est comme un déguisement pour tes véritables intentions.",
				"Tu sourires, mais on sait que ça cache un sous-entendu bien moins agréable.",
				"Ce sourire est aussi sincère qu'un politicien en campagne.",
				"Tu souris, mais tu ne trompes personne. On sait tous que ça ne va pas.",
				// Nouvelles répliques ajoutées
				"Ton sourire est tellement forcé qu'il pourrait faire un stage chez un marionnettiste.",
				"Ce sourire, c'est comme un post-it sur un mur cassé. Tu caches la misère, mais on voit tout.",
				"Ton sourire, c'est un peu comme le Wi-Fi dans un train : ça ne marche jamais comme prévu.",
				"Ce sourire est aussi crédible qu'une promesse de régime après les fêtes.",
				"On dirait que ton sourire est sponsorisé par le désespoir.",
				"Ton sourire est tellement faux qu'il devrait être vendu en plastique.",
				"Si ton sourire était une chanson, ce serait du playback pur et simple.",
				"Ce sourire ne fait que confirmer que tu te mens à toi-même.",
				"Ton sourire est comme un parapluie troué : inutile sous la tempête.",
				"Ce sourire est aussi discret qu'un éléphant dans un magasin de porcelaine.",
				"Un sourire comme ça, c'est tout un art... ou un désastre.",
				"Tu souris, mais c'est ton cerveau qui crie 'À l'aide'.",
				"On dirait que tu souris juste pour qu'on arrête de te poser des questions.",
				"Ce sourire, c'est comme un tatouage mal fait : tu penses que c'est beau, mais non.",
				"Ton sourire, c'est un peu comme une blague ratée : personne n'y croit, mais on fait semblant.",
				"Ce sourire pourrait faire croire que tout va bien, mais personne n'est dupe.",
				"Tu souris, mais ton âme pleure. C'est touchant, vraiment.",
				"Ton sourire est tellement forcé qu'on dirait un stage en entreprise non payé.",
				"Ce sourire, c'est l'équivalent émotionnel d'une gifle polie.",
				"Si ton sourire était une personne, il demanderait lui-même de l'aide."
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
