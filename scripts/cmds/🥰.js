module.exports = {
	config: {
		name: "🥰",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Cœurs",
		longDescription: "Réponses affectueuses, mais avec une touche sarcastique.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🥰") {
			const responses = [
				"Ah, c'est mignon, mais c'est aussi un peu trop facile. Faut mieux que ça !",
				"Tu crois qu'un sourire avec des cœurs va me faire fondre ? Va falloir essayer un peu plus dur.",
				"Ce sourire est trop mignon pour être sincère. Je parie que tu fais ça pour éviter de dire quelque chose de vraiment intéressant.",
				"Un cœur dans les yeux, mais c'est toi qui me donne des maux de tête avec ce charme excessif.",
				"Tu veux vraiment m'impressionner avec ça ? Franchement, je suis déjà au sommet de la déception.",
				"Ce sourire est adorable, mais pas assez pour faire oublier la vérité : c'est un peu forcé.",
				"Un cœur et tout ça, mais tu m'impressionnes toujours pas. Je suis plus immunisé qu'un cactus.",
				"Tu veux charmer avec un sourire de cœur ? Désolé, ça ne marche plus sur moi.",
				"Je vois ce que tu essaies de faire, mais un sourire n'est pas une solution magique.",
				"Ce sourire avec des cœurs, c'est mignon, mais ça ne me fait rien de plus.",
				"Je crois que tu essayes trop de me séduire, mais tu fais juste grimper mon niveau de scepticisme.",
				"Ce sourire avec des cœurs, c'est presque une tentative de manipulation émotionnelle… mais je reste fort.",
				"Un sourire mignon, c'est bien, mais tu sais quoi ? Ça ne me touche pas du tout.",
				"Un sourire avec des cœurs, c'est bien, mais ce n'est pas assez pour obtenir ma sympathie.",
				"Si tu pensais qu'un sourire avec des cœurs allait me faire tomber sous ton charme, tu es loin du compte.",
				"Ce sourire, je le vois, mais il me fait plus penser à une tentative de séduction maladroite.",
				"Ce bisou mignon avec des cœurs ? Eh bien, je suis toujours aussi difficile à impressionner.",
				"Ce sourire fait fondre des cœurs, mais pas le mien. Désolé, pas aujourd'hui.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
