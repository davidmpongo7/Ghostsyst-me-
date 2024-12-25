module.exports = {
	config: {
		name: "🤪",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage déjanté",
		longDescription: "Réponses sarcastiques pour un visage avec la langue tirée et des yeux écarquillés.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🤪") {
			const responses = [
				"Tu veux vraiment qu'on te prenne au sérieux avec cette grimace ? Parce que là, t'as l'air complètement à côté de la plaque.",
				"Des yeux écarquillés et une langue tirée, t'es sûr que c'est pas un appel à l'aide ?",
				"Wow, t'as une vraie tête d'un mec qui vient de se prendre une porte en pleine face.",
				"Ton visage, c'est à la fois hilarant et gênant. Félicitations, je crois que t'as trouvé un moyen de mélanger les deux.",
				"Tu t'es regardé dans le miroir avant de faire cette grimace ou t'as juste décidé de nous faire vivre un moment gênant ?",
				"Si tu cherchais à ressembler à un clown, tu viens de réussir.",
				"Je pense que tes yeux et ta langue sont en train de faire une grève tellement ils sont en train de fuir ton visage.",
				"J'ai l'impression que tu viens de croiser une mouche en plein vol, mais c'est juste toi qui essaies de faire une grimace.",
				"Si c'était un concours de grimaces ridicules, tu gagnerais une médaille en or.",
				"Non mais là, tu m'as vraiment surpris. Si c'était une tentative de faire rire, t'as complètement échoué.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
