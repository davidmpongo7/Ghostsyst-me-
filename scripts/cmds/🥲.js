module.exports = {
	config: {
		name: "🥲",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Tristesse",
		longDescription: "Réponses sarcastiques et un peu pleines de pitié pour un visage avec une larme.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🥲") {
			const responses = [
				"Ah, une larme ! Mais je parie que c'est de la fausse émotion. Vraiment pathétique.",
				"Tu veux qu'on te prenne en pitié avec une larme ? Tu devrais vraiment revoir ton jeu.",
				"Regarde-toi, une larme pour ça ? La vraie tristesse, tu n'as pas encore eu l'honneur de la connaître.",
				"Tu pleures pour ça ? Ça ne mérite même pas un mouchoir.",
				"Cette larme… C'est celle du genre de personne qui pleure juste pour attirer l'attention.",
				"Un visage avec une larme, vraiment ? Essaye de ne pas être si dramatique.",
				"Tu pleures mais c'est plus une tentative maladroite d'attirer la pitié. Ce n'est pas convaincant.",
				"Tu devrais peut-être économiser tes larmes pour quelque chose de vraiment triste, pas pour cette situation.",
				"Tu veux me convaincre que ça t'affecte ? Désolé, je ne suis pas dupe.",
				"Une larme, sérieusement ? On dirait que tu essaies de jouer dans un film triste, mais ça tombe à plat.",
				"Ce visage avec une larme, c'est exactement ce que tu fais chaque fois que tu réalises que tes blagues sont nulles.",
				"Tu veux qu'on se sente mal pour toi ? Essaie encore, ce ne sera pas aussi facile.",
				"Une larme ne résout rien. Essaie de trouver une vraie solution à tes problèmes.",
				"Tu pleures, mais je suis plus occupé à rire de ta tentative de drame.",
				"Un peu trop de larmes, pas assez de bonnes raisons, tu devrais y penser.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
