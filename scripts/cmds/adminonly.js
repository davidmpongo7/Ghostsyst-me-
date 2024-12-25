const fs = require("fs-extra");
const { config } = global.GoatBot;
const { client } = global;

module.exports = {
	config: {
		name: "adminonly",
		aliases: ["adonly", "onlyad", "onlyadmin"],
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "bật/tắt chế độ chỉ admin mới có thể sử dụng bot",
			en: "turn on/off only admin can use bot"
		},
		category: "owner",
		guide: {
			vi: "   {pn} [on | off]: bật/tắt chế độ chỉ admin mới có thể sử dụng bot"
				+ "\n   {pn} noti [on | off]: bật/tắt thông báo khi người dùng không phải là admin sử dụng bot",
			en: "   {pn} [on | off]: turn on/off the mode only admin can use bot"
				+ "\n   {pn} noti [on | off]: turn on/off the notification when user is not admin use bot"
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chế độ chỉ admin mới có thể sử dụng bot",
			turnedOff: "Đã tắt chế độ chỉ admin mới có thể sử dụng bot",
			turnedOnNoti: "Đã bật thông báo khi người dùng không phải là admin sử dụng bot",
			turnedOffNoti: "Đã tắt thông báo khi người dùng không phải là admin sử dụng bot"
		},
		en: {
			turnedOn: [
				"🔒 | Mode activé : seuls les admins peuvent maintenant utiliser ce bot. Les autres, merci de passer votre chemin !",
				"🔒 | Seuls les admins peuvent accéder à ce bot maintenant. Désolé, tout le monde, il va falloir revenir plus tard !",
				"🔒 | Le mode 'admins seulement' est activé. Pas de panique, on vous aime quand même, mais c’est pour votre bien.",
				"🔒 | Accès limité aux admins. Tout le monde peut regarder, mais seulement les admins peuvent jouer. Désolé, pas de place pour les amateurs.",
				"🔒 | Mode admin activé : seuls ceux qui ont la clé peuvent entrer. Pas de panique, vous pouvez toujours poser des questions, mais ça ne sert à rien.",
			],
			turnedOff: [
				"🔓 | Mode désactivé : tout le monde peut maintenant participer ! Soyez gentils et respectueux, ou vous serez vite renvoyé.",
				"🔓 | Le mode 'admins seulement' est désactivé. Tout le monde est bienvenu, mais ne vous attendez pas à ce qu'on vous applaudisse.",
				"🔓 | Mode ouvert à tous. Mais franchement, ne nous faites pas regretter de vous avoir laissé entrer.",
				"🔓 | C’est bon, tout le monde peut entrer ! Mais attention, on garde un œil sur vous pour éviter que ça devienne un cirque.",
				"🔓 | Le cadenas est enlevé, tout le monde peut maintenant participer. Vous êtes invités, mais évitez de faire les idiots.",
			],
			turnedOnNoti: [
				"🔔 | Alerte : un non-admin a essayé d’utiliser le bot. Rappelez-leur gentiment que ce n’est pas pour eux, avant qu'ils ne se sentent trop fiers.",
				"🔔 | Notification activée : on vous prévient quand un non-admin se risque à utiliser le bot. Oui, vous, l’amateur. On vous surveille.",
				"🔔 | Maintenant, chaque tentative d’un non-admin d’utiliser le bot sera notifiée. Ne vous inquiétez pas, c’est pour leur bien. On aime rire un peu.",
				"🔔 | Alerte, un utilisateur non-admin a tenté d’utiliser le bot. Ce n'est pas pour vous, donc retournez à vos occupations.",
				"🔔 | Vous avez été avertis : désormais, chaque tentative des non-admins d’utiliser le bot sera notifiée. Allez, essayez encore, ça nous amuse.",
			],
			turnedOffNoti: [
				"🔕 | Les notifications pour les utilisateurs non-admin sont maintenant désactivées. Si vous vous égarez, personne ne vous remarquera… mais on vous surveille.",
				"🔕 | Plus de notifications pour les non-admins. Faites ce que vous voulez, personne ne jugera… sauf nous, discrètement.",
				"🔕 | Pas de notifications maintenant. Faites vos essais en toute tranquillité, mais soyez sages, ou on vous mettra sur liste noire.",
				"🔕 | Les notifications pour les non-admins sont éteintes. Faites ce que vous voulez, mais souvenez-vous qu’on vous garde à l’œil. On rigole toujours.",
				"🔕 | Notifications éteintes. Si vous vous trompez, c’est entre nous… mais soyez prudents quand même. On ne rigole pas éternellement.",
			]
		}
	},

	onStart: function ({ args, message, getLang }) {
		let isSetNoti = false;
		let value;
		let indexGetVal = 0;

		if (args[0] == "noti") {
			isSetNoti = true;
			indexGetVal = 1;
		}

		if (args[indexGetVal] == "on")
			value = true;
		else if (args[indexGetVal] == "off")
			value = false;
		else
			return message.SyntaxError();

		if (isSetNoti) {
			config.hideNotiMessage.adminOnly = !value;
			message.reply(getLang(value ? "turnedOnNoti" : "turnedOffNoti"));
		}
		else {
			config.adminOnly.enable = value;
			const responses = getLang(value ? "turnedOn" : "turnedOff");
			message.reply(responses[Math.floor(Math.random() * responses.length)]);
		}

		fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
	}
};
