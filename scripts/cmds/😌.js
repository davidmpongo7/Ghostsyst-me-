module.exports = {
	config: {
		name: "😌",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Détente",
		longDescription: "Réponses sarcastiques pour un visage détendu.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😌") {
			const responses = [
				"Ah, tu essaies d'avoir l'air détendu, mais tu as l'air plus perdu qu'autre chose.",
				"Tu sembles si calme, mais je parie que ta vie est un chaos total en ce moment.",
				"Le calme avant la tempête, n'est-ce pas ? Parce que je sais que ça ne va pas durer.",
				"Ce visage détendu… Ce n'est pas la tranquillité, c'est juste une fausse couverture pour tes véritables émotions.",
				"Tu fais semblant d'être zen, mais on sait tous que tu te retiens de tout exploser.",
				"Calme, calme… ou peut-être juste un petit peu de stress déguisé en détente.",
				"J'adore comment tu essaies de montrer que tu es détendu, mais ta nervosité me saute aux yeux.",
				"Tu t'efforces tellement de paraître calme que tu en deviens presque comique.",
				"Cette fausse tranquillité, c'est ce qu'on appelle une illusion bien réussie, mais tout le monde voit à travers.",
				"Vraiment ? Tu crois que je vais acheter cette image de calme ? Pffff, pas de chance.",
				"Si c'était un test de détente, tu échoues totalement. Tu te forces trop.",
				"Tu sembles détendu, mais je suis sûr que ta tête est un vrai champ de bataille en ce moment.",
				"Ah, ce sourire calme. C'est juste pour masquer ta panique intérieure, hein ?",
				"Ce calme extérieur cache sûrement des pensées catastrophiques à l'intérieur.",
				"Tu es aussi détendu qu'une bombe à retardement, c'est impressionnant.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
