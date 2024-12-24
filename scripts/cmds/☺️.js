module.exports = {
	config: {
		name: "☺️",
		version: "1.1",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Sourire timide",
		longDescription: "Réponses sarcastiques et mignonnes pour un sourire timide.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "☺️") {
			const responses = [
				"Ce sourire timide, c'est sûrement pour cacher ta vraie personnalité, hein ?",
				"Ce sourire innocent… mais on sait tous que tu prépares un coup bas.",
				"Ce sourire tout doux, mais je parie que tu as quelque chose de maléfique en tête.",
				"Un sourire timide, vraiment ? Allez, sois un peu plus direct, on te connaît.",
				"Ce sourire me dit : 'Je suis trop mignon pour que tu me dises non', mais désolé, je ne tombe pas dans le piège.",
				"Un sourire timide ne cache rien. Tu vas finir par en dire trop, je parie.",
				"Ce sourire ne cache pas ton côté sournois, tu sais.",
				"Ce sourire est plus suspect que celui de quelqu'un qui cache un secret.",
				"Tu essaies d'être mignon avec ce sourire, mais c'est trop visible, tout le monde voit tes intentions.",
				"Ce sourire, c'est comme une comédie romantique : tout est trop parfait pour être vrai.",
				"Ah, ce sourire timide ! Comme si on allait croire que tu es vraiment si innocent.",
				"Ce sourire, c'est l'ultime tentative de paraître mignon alors que tu sais bien que tu fais des bêtises.",
				"Tu souris comme ça pour cacher ta culpabilité, mais on n'est pas dupes.",
				"Ton sourire timide ne fait que rendre ton attitude plus suspecte.",
				"Ce sourire est le genre qui te fait dire : 'Je suis innocent'… mais ce n'est clairement pas le cas.",
				// Nouvelles phrases ajoutées
				"Ce sourire, c'est comme une promo qui semble trop belle pour être vraie : ça cache toujours un piège.",
				"Un sourire aussi timide que tes tentatives de paraître intelligent. Spoiler : ça marche pas.",
				"Tu souris comme si tu venais de casser un truc et espérais qu'on ne s'en aperçoive pas.",
				"Ce sourire est tellement fake qu’il devrait être sponsorisé par Hollywood.",
				"On dirait que tu souris pour éviter qu’on parle de tes décisions catastrophiques.",
				"Ton sourire timide, c’est le dernier espoir d’une personne en détresse sociale.",
				"Ce sourire, c’est l’équivalent facial d’un 'je comprends rien mais je fais semblant'.",
				"Un sourire timide ? Plutôt le camouflage d’un cerveau en mode veille prolongée.",
				"Ce sourire me donne l'impression que tu viens de perdre une bataille mentale contre toi-même.",
				"Tu souris comme si tu voulais qu’on oublie ton passé embarrassant. Spoiler : on s’en souvient.",
				"Ton sourire a la même énergie qu’un clown triste, mais sans maquillage.",
				"On dirait que ce sourire est un écran de fumée pour cacher ton absence totale de plans.",
				"Ton sourire, c’est comme un selfie mal cadré : ça aurait pu marcher, mais ça rate toujours.",
				"Ce sourire est tellement louche qu’il devrait figurer dans une série policière.",
				"Un sourire aussi suspect que toi quand tu dis : 'Je vais bien'.",
				"Ton sourire me donne envie de demander : 'Où est le problème cette fois ?'",
				"Ce sourire est comme un déguisement raté pour Halloween : personne n'y croit.",
				"Tu souris comme si tu venais de découvrir que la vie est un bug permanent.",
				"Ton sourire, c’est un peu comme toi en général : un mélange d’effort et de désastre.",
				"On dirait que tu souris pour compenser le fait que tu n’as rien d’intéressant à dire.",
				"Ton sourire me rappelle un enfant qui essaye d’être sage juste avant Noël. Pas convaincant.",
				"Ce sourire, c’est le masque parfait d’un chaos intérieur. Respect pour l’effort !",
				"Tu souris comme un chat qui vient de voler un steak et espère ne pas se faire griller.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
