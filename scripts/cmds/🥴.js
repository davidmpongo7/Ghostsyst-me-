module.exports = {
	config: {
		name: "🥴",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage dégoûté",
		longDescription: "Réponses sarcastiques pour un visage de dégoût ou d'épuisement.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🥴") {
			const responses = [
				"Alors ça, c'est une expression de pure déception. On dirait que t'as mangé un truc que même ton estomac n'a pas accepté.",
				"Franchement, t'as l'air d'avoir avalé une grenouille. C'est ça, ton visage après ?",
				"Ce visage, c'est celui d'un mec qui regrette d'avoir posé cette question stupide.",
				"On dirait que t'as vu un film de peur et que tu t'es pris une grosse claque.",
				"Pourquoi avoir une telle expression ? T'es malade ou c'est juste ta tête naturelle ?",
				"Si ton visage pouvait parler, il dirait qu'il veut juste disparaître.",
				"Ce regard-là, c'est le même que j'ai quand je vois une de tes blagues.",
				"On dirait que t'as mangé un truc qui t'as fait regretter toutes tes décisions de vie.",
				"Tu fais une grimace ou c'est juste ton visage qui en a marre de toi ?",
				"Tu veux qu'on t'achète un dessert pour te remonter le moral ? Parce que là, ça va pas du tout.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
