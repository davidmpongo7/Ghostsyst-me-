module.exports = {
	config: {
		name: "😑",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage sans expression",
		longDescription: "Réponses sarcastiques pour un visage sans expression.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😑") {
			const responses = [
				"Ah, cette expression, c'est celle d'une personne qui sait déjà que tout ce qui va suivre va être une perte de temps.",
				"Tu veux qu'on parle de rien, c'est ça ? Parce que ton visage me dit que tu t'en fous totalement.",
				"Ce visage-là, c'est celui de quelqu'un qui a déjà perdu tout espoir et qui préfère ne rien dire.",
				"Si tu voulais faire une déclaration puissante avec ce visage, désolé, c'est plutôt de la déception.",
				"Quand tu fais ce visage, on dirait que tu es déjà parti en vacances mentalement. Et on ne peut même pas t'en vouloir.",
				"Ce genre de visage, c'est celui que tu fais quand tu te rends compte que ta journée est déjà ruinée.",
				"Tu veux nous dire quelque chose ? Parce qu'on dirait que tu n'as rien à dire.",
				"Tu veux un peu d'expression là ? Parce que là, t'as juste l'air d'une version humaine d'une pierre.",
				"Ce regard est tellement vide qu'on pourrait y faire un trou dedans.",
				"Tu te fous de tout, hein ? Parce que ton visage parle tout seul.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
