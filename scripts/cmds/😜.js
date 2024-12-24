module.exports = {
	config: {
		name: "😜",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Clin d'œil taquin",
		longDescription: "Réponses sarcastiques pour un visage avec la langue tirée et un clin d'œil.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😜") {
			const responses = [
				"Ah, le clin d'œil ! T'as l'impression que ça rend ton emoji irrésistible ? Spoiler : ça ne marche pas.",
				"Ton clin d'œil et ta langue dehors, tu t'es cru drôle là, hein ? Mais ça ne l'est pas du tout.",
				"Tu penses qu'en faisant ça, t'es sexy ? Non, mon pote, c'est juste gênant.",
				"Le clin d'œil et la langue tirée, c'est censé être séduisant ? Parce que là, c'est plus ridicule qu'autre chose.",
				"Franchement, t'as une sale tête là. Même le clin d'œil ne sauve pas ta tentative.",
				"Si t'essayais d'être mignon, t'as échoué. Totalement.",
				"Ce clin d'œil là, c'est plus un avertissement qu'autre chose. Rien de sexy dans cette grimace.",
				"Tu veux vraiment qu'on prenne ça au sérieux ? T'as l'air d'un enfant perdu dans un magasin de bonbons.",
				"Un clin d'œil et la langue dehors, sérieusement ? T'es sûr que t'as plus de 12 ans ?",
				"Non mais sérieusement, qui t'a dit que cette grimace était cool ? On dirait que t'es en train de faire une crise.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
