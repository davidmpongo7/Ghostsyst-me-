module.exports = {
	config: {
		name: "🤩",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Admiration intense",
		longDescription: "Réponses pleines d'admiration sarcastique.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "🤩") {
			const responses = [
				"Wow, tu me regardes avec des yeux de merlan frit, mais désolé, ça ne marche pas sur moi.",
				"Je vois bien ton regard admiratif, mais t'as vraiment l'air plus impressionné par toi-même que par moi.",
				"Ah, tu veux m'impressionner avec des yeux comme ça ? Désolé, même les stars de cinéma me regardent comme ça.",
				"Ces yeux là, c'est presque pathétique, essaie encore, peut-être que ça marchera la prochaine fois.",
				"Un regard comme ça ? Tu veux vraiment faire croire que je vais fondre ? Laisse-moi rire.",
				"Ce regard est plus rempli de fantasmes que d'admiration réelle. Va falloir revoir ta stratégie.",
				"Un regard comme ça, et tu penses vraiment que tu m'impressionnes ? T'es encore loin du compte.",
				"Si tu penses que ce regard va me faire craquer, tu es dans une grosse illusion.",
				"Tu as l'air d'un enfant qui voit un clown au cirque, mais moi, ça me laisse de marbre.",
				"Ce regard, c'est l'overdose de drama, mais c'est surtout très ridicule.",
				"Tu veux vraiment que je prenne ton regard au sérieux ? Faudra faire bien plus pour ça.",
				"Ton regard me fait penser à un film dramatique, mais je suis un film de science-fiction, donc rien à voir.",
				"Des yeux aussi grands, mais aucune idée intéressante qui suit. Quelle déception.",
				"Ce regard ne m'impressionne pas du tout, désolé de briser ta petite illusion.",
				"Tu veux m'impressionner avec ce regard ? Va falloir beaucoup plus pour ébranler mon cœur.",
				"Si ton regard avait le pouvoir d'impressionner, tu serais une célébrité mondiale. Mais là, rien.",
				"Ce regard, c'est comme un feu d'artifice dans un ciel nuageux. C'est éphémère et ça ne sert à rien.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
