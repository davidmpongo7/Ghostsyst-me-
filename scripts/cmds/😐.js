module.exports = {
	config: {
		name: "😐",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage neutre",
		longDescription: "Réponses sarcastiques pour un visage neutre.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😐") {
			const responses = [
				"Tu viens de me montrer ton visage ennuyeux. Sérieusement, est-ce que t'as déjà vécu quelque chose d'intéressant ?",
				"Ce visage, c'est celui d'un mec qui attend patiemment que la vie lui passe dessus.",
				"Alors, ce visage là, c'est celui d'un gars qui a déjà vu trop de choses sans vraiment réagir.",
				"Si t'avais une personnalité, je pense qu'on pourrait en discuter, mais là, c'est juste du vide.",
				"Wow, t'as l'air tellement motivé pour discuter de ce sujet. Laisse-moi deviner, t'es super intéressé.",
				"Tu vois, ton visage là, c'est exactement ce qu'on appelle l'indifférence pure.",
				"Non mais sérieusement, t'as quelque chose à dire ? Parce que là, t'as l'air plus absent qu'un astronaute sur Mars.",
				"Tu me donnes l'impression de regarder une émission ennuyeuse et de ne pas savoir si tu veux t'endormir ou t'en aller.",
				"Ton visage montre que même toi, t'as renoncé à la conversation. Ça ne sert à rien de continuer.",
				"Tu veux qu'on parle de ton expression faciale ? Parce que là, ça ne va pas du tout.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
