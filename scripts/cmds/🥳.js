module.exports = {
	config: {
		name: "🥳",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Célébration",
		longDescription: "Réponses sarcastiques pour une célébration un peu trop exagérée.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🥳") {
			const responses = [
				"Ah, tu te crois vraiment en fête, là ? C'est pas vraiment ça la définition d'une célébration.",
				"Bravo pour cette fête incroyable… mais je crois que le vrai spectacle est dans ton imagination.",
				"On dirait que tu viens de gagner la médaille d'or du ridicule. Félicitations, vraiment.",
				"Un emoji de fête pour un message aussi déprimant. C'est le monde à l'envers.",
				"Tu fais la fête tout seul ? Bravo, tu viens d'inventer la déprime en fête.",
				"Tu as l'air de célébrer quelque chose, mais tu pourrais fêter une victoire dans une compétition de nullité.",
				"Ah, c'est la fête, mais sérieusement, qu'est-ce qu'on célèbre ici ?",
				"Cette célébration aurait plus de sens si tu avais quelque chose à fêter. Mais bon, continue à t'amuser.",
				"Le seul truc à célébrer ici, c'est ton incroyable capacité à être aussi ridicule.",
				"Fêter quoi exactement ? La victoire dans le concours de l'ennui ?",
				"Une fête ? Sérieusement ? C'est plus comme un enterrement d'humour.",
				"Ah, tu fais la fête, mais c'est plus comme regarder un film de série B. Juste sans intérêt.",
				"Si c'est ça ta définition de la fête, je vais rester chez moi, merci.",
				"Tu vois ça comme une fête, mais pour moi, c'est juste une perte de temps.",
				"Une fête ? T'as bien dû oublier de t'amuser avant de venir ici.",
				"Cette fête aurait été plus sympa si tu n'étais pas aussi ennuyant.",
				"Tu crois que c'est la fête ? C'est plus la fête de la solitude, franchement.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
