module.exports = {
	config: {
		name: "🙃",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Visage renversé",
		longDescription: "Réponses décalées et sarcastiques pour un visage renversé.",
		category: "reply",
	},
	onStart: async function() {},

	onChat: async function({ event, message }) {
		if (event.body && event.body.toLowerCase() == "🙃") {
			const responses = [
				"Tu te crois drôle avec cette tête renversée, mais non, c'est juste toi qui t'embrouilles dans ta propre vie.",
				"Ce visage renversé, c'est le reflet de ta personnalité, un peu décalé et mal orienté.",
				"Ah, une tête à l'envers ! Quelle originalité… Tu devrais peut-être essayer de la remettre à l'endroit.",
				"Si je pouvais me renverser la tête comme ça à chaque fois que je te vois, j'aurais mal au cou.",
				"Ce visage renversé, c'est exactement ce que tu ressens après avoir fait une erreur monumentale.",
				"Tu sais que ta tête est censée être droite, non ? Mais bon, l'originalité, c'est toi !",
				"Ce regard à l'envers me fait penser à ton sens de l'humour. C'est comme ça, mais pas tout à fait.",
				"Tu fais comme si ce visage était cool, mais en réalité, c'est juste un peu trop décalé pour être pris au sérieux.",
				"Ce visage renversé, c'est probablement le seul moment où tu te sens un peu différent des autres.",
				"Tu t'emmêles les pinceaux dans ta tête et tu veux qu'on le remarque ? Mission accomplie.",
				"Ah, une tête à l'envers ! Comme si ça allait changer quelque chose, désolé, ça ne fonctionne pas comme ça.",
				"Tu as l'air perdu dans tes pensées, mais vraiment perdu. Tu pourrais essayer de retrouver la route.",
				"Renversé comme ça, tu veux me faire croire que tu es cool ? Pas vraiment, désolé de te décevoir.",
				"Ce visage renversé, c'est exactement ce que tu fais quand tu essaies d'être créatif, mais que ça ne prend pas.",
				"Tu fais la tête comme si t'avais découvert un secret, mais en fait tu as juste renversé ton café.",
				"Ce visage renversé, c'est toi quand tu réalises que personne n'a compris ta blague.",
				// Nouvelles répliques
				"Tu te crois malin avec ce visage renversé, mais en réalité, ça reflète juste ton niveau de confusion.",
				"Renversé comme ta logique, ce visage te va parfaitement.",
				"Ce visage renversé, c’est toi après avoir essayé de comprendre une blague trop complexe.",
				"Quand tu mets ta vie à l’envers, au moins cet emoji te ressemble un peu.",
				"Tu sais, même ton cerveau a l’air renversé à force de faire des choix douteux.",
				"Si ce visage renversé était une œuvre d’art, ce serait un Picasso raté.",
				"Tu veux montrer que tu es unique ? Félicitations, c’est réussi, mais pas dans le bon sens.",
				"Renversé comme ça, on dirait que tu essaies d’être intéressant… Mais ça ne prend pas.",
				"Ce visage est exactement toi après avoir tenté de réparer tes erreurs, mais sans succès.",
				"On dirait que ce visage renversé est ta réponse par défaut quand tu n’as rien de mieux à dire.",
				"Ce visage renversé, c’est comme toi devant un problème : inutile et décoratif.",
				"Ah, une tête à l’envers, c’est une belle métaphore pour tes idées brillantes… qui tombent toujours à côté.",
				"Ce visage, c’est toi après une semaine de mauvaises décisions consécutives.",
				"Tu crois que cet emoji va t’aider à te sortir de la situation ? Mauvaise nouvelle, il empire tout.",
				"Ce visage renversé, c’est toi quand tu veux faire croire que tout va bien, alors que tout s’écroule.",
				"Renversé comme ta logique, ça colle bien à ta personnalité.",
				"Ton choix d’emoji, c’est comme ta vie : désordonné, mais divertissant.",
				"Un visage renversé… Pourquoi ? Parce que ta vie est un sketch en trois actes, mais sans le punchline.",
				"Tu fais comme si cet emoji expliquait tout, mais non, ça reste aussi confus que toi.",
				"Ce visage renversé, c’est toi après avoir encore foiré une tentative de briller."
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
