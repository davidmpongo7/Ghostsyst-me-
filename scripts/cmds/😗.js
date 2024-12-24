module.exports = {
	config: {
		name: "😗",
		version: "1.0",
		author: "Ghost",
		countDown: 5,
		role: 0,
		shortDescription: "Bisou",
		longDescription: "Réponses légères et moqueuses, souvent avec un ton ironique.",
		category: "reply",
	},
	onStart: async function() {},
	onChat: async function({
		event,
		message,
		getLang
	}) {
		if (event.body && event.body.toLowerCase() == "😗") {
			const responses = [
				"Tu sais, si tu veux vraiment m'envoyer un bisou, il va falloir plus que ça.",
				"Un bisou airé ? On dirait plus un appel désespéré.",
				"Tu penses que ce bisou va me convaincre ? C'est un peu léger, non ?",
				"Si tu veux faire fondre mon cœur, va falloir changer de technique, ce bisou est aussi sincère qu'une fausse promesse.",
				"Ce bisou me fait plus penser à un refus qu'à un geste d'affection.",
				"Essaye de m'envoyer un vrai bisou, celui-là n'a pas du tout fait l'affaire.",
				"Un bisou comme ça ? T'es sûr que tu n'as pas oublié de mettre un peu de passion dedans ?",
				"Tu penses qu'un bisou comme ça va changer quoi ? Tu m'as juste donné un avant-goût de la déception.",
				"Vraiment ? Un bisou aérien ? Essaye encore, mais cette fois avec un peu plus de conviction.",
				"Ton bisou est aussi crédible que tes chances de me convaincre avec un seul emoji.",
				"Ah, tu veux m'envoyer un bisou ? Dommage, il n'a même pas fait le tour de ma tête.",
				"Ce bisou est aussi authentique que ton sens de l'humour… vraiment pas.",
				"Si tu crois que ce bisou va réparer ton image, je te conseille de réessayer… mais avec un peu plus d'intensité.",
				"Un bisou comme ça ne me fait pas fondre, il me fait juste réfléchir à comment éviter une autre tentative.",
				"Tu devrais peut-être essayer avec un peu plus de charme, celui-là ne m'impressionne même pas.",
				"Si tu voulais vraiment m'impressionner, tu aurais dû faire mieux que ça.",
				"Ce bisou est aussi sincère qu'un compliment sur un mauvais film.",
				"Tu penses que ça suffira pour me charmer ? Va falloir être plus créatif.",
				"Un bisou aérien ? Franchement, même ton emoji n'y croit pas.",
				"Ce bisou est aussi convaincant qu'un argument sans logique.",
			];
			return message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}
	}
};
