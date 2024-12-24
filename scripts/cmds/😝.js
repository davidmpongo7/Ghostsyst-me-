module.exports = {
	config: {
		name: "😝",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Sourire moqueur",
		longDescription: "Réponses sarcastiques pour un visage avec la langue tirée et les yeux fermés.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😝") {
			const responses = [
				"Wow, des yeux fermés et la langue dehors, c'est vraiment la meilleure image de toi, non ?",
				"Ton visage est tellement expressif, je me demande si t'es en train de t'étouffer avec ta propre langue.",
				"Tu crois que t'es mignon avec ta langue qui pend ? Pas vraiment, non.",
				"Tu fais une crise d'identité ou c'est juste ta tentative de ressembler à un idiot ?",
				"Rien ne vaut un emoji où t'as l'air de faire une grosse crise de rigolade… mais qui n'est vraiment pas drôle.",
				"Le combo yeux fermés et langue dehors, c'est soit une pose, soit une tentative désespérée d'attirer l'attention. Spoiler : ça ne fonctionne pas.",
				"Tu as l'air tellement… décalé. Non, mais sérieusement, c'est à ça que ressemble ton humour ?",
				"Tu veux vraiment qu'on prenne ça pour une blague ? Parce que là, c'est juste un gros fail.",
				"Si c'était une compétition pour être ridicule, tu viens de gagner haut la main.",
				"Ah oui, t'es super marrant avec tes grimaces, continue, je rigole encore… pas.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
