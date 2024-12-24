module.exports = {
	config: {
		name: "😉",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Humour coquin",
		longDescription: "Réponses sarcastiques et un peu trop suggestives.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😉") {
			const responses = [
				"Ah, t'as ce regard. Et si on parlait de ton humour plutôt que de tes sous-entendus ?",
				"Tu veux jouer la carte du coquin, mais ça sent plus la panne sèche.",
				"Ce clin d'œil ne suffit pas pour masquer la catastrophe qui vient de sortir de ta bouche.",
				"Je crois que ton regard veut dire 'Je suis en train de bousiller une blague'.",
				"Ton clin d'œil est plus gênant que drôle. On dirait un mauvais film romantique.",
				"Si ce clin d'œil était une blague, je dirais qu'on a tous perdu une minute de vie.",
				"On dirait que tu fais plus que des clins d'œil... Tu essaies de sortir un humour à deux balles.",
				"Ce clin d'œil... c'est plus un appel au secours qu'un signe de charme.",
				"Quand tu utilises ce genre de clin d'œil, je ne sais pas si tu es en train de flirter ou de désespérer.",
				"Tu t'attends à ce que ce clin d'œil change quelque chose ? C’est comme mettre du sucre sur un plat déjà raté.",
				"Un clin d'œil ? Vraiment ? C'est tout ce que t'as trouvé pour essayer de paraître cool ?",
				"Tu pensais qu'un simple clin d'œil allait nous sauver de ton humour de qualité douteuse ?",
				"Franchement, si tu cherches à ajouter du piquant, c'est raté. Ce clin d'œil te trahit.",
				"Je ne sais pas ce que tu essaies de dire, mais ton regard est aussi subtile qu'un éléphant dans un magasin de porcelaine.",
				"Si c'était un message secret, c'était un gros échec. On va juste dire que t'es mignon, et basta.",
				"Ce clin d'œil c'est comme une mauvaise vanne : il tombe à plat et te fait perdre de la crédibilité.",
				"Allez, garde ton clin d'œil, mais on va quand même dire que c'est comme une erreur dans un jeu vidéo.",
				"Tu voulais faire un clin d'œil charmeur, mais tu ressembles plus à quelqu'un qui se demande s'il a mis ses chaussettes à l'envers.",
				"Tu crois vraiment que ce clin d'œil nous fait oublier la blague qui suit ? C’est trop facile.",
				"Le clin d'œil est censé ajouter du mystère, mais je crois que tu viens de tout dévoiler d'un seul coup.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
